<?php

namespace App\Http\Controllers\Api;

use App\Models\Todo;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTodoRequest;
use App\Http\Requests\UpdateTodoRequest;
use App\Http\Resources\TodoResource;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user  = Auth::user();
        $todos = User::find($user->id)->todos;
        return TodoResource::collection($todos);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTodoRequest $request)
    {
        $user = Auth::user();
        $data = $request->validated();
        $todo = Todo::create([
            "title"       => $data["title"],
            "description" => $data["description"] ?? "",
            "public"      => intval($data["public"]),
            "user_id"     => $user->id
        ]);
        return new TodoResource($todo);
    }

    /**
     * Display the specified resource.
     */
    public function show(Todo $todo)
    {
        $user = Auth::user();
        $responsePermissions = $this->permissionsToTodo($user, $todo);
        if ($responsePermissions){
            return response($responsePermissions);
        }
        return new TodoResource($todo);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTodoRequest $request, Todo $todo)
    {
        $user = Auth::user();
        $responsePermissions = $this->permissionsToTodo($user, $todo);
        if ($responsePermissions){
            return response($responsePermissions);
        }
        $data = $request->validated();
        $todo->update($data);
        return new TodoResource($todo);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Todo $todo)
    {
        if ($todo->deleted){
            return response(["message" => "This todo already is deleted"]);
        }
        $user = Auth::user();
        $responsePermissions = $this->permissionsToTodo($user, $todo);
        if ($responsePermissions){
            return response($responsePermissions);
        }
        $todo->deleteTodo();
        return response(["message" => "Todo deleted"]);
    }

    public function publicTodos(){
        $todos = Todo::where("public", 1)->orderBy("id", "desc")->paginate(10);
        return TodoResource::collection($todos);
    }

    public function closeTodo(Todo $todo){
        if (!$todo->status){
            return response(["message" => "This todo already is closed"]);
        }
        $user = Auth::user();
        $responsePermissions = $this->permissionsToTodo($user, $todo);
        if ($responsePermissions){
            return response($responsePermissions);
        }
        $todo->closeTodo();
        return response(["message" => "Todo closed"]);
    }

    private function permissionsToTodo($user, $todo){
        if ($user->id !== $todo->user_id && !$todo->public)
        {
            return ["message" => "You dont have acces to this todo"];
        }
    }
}
