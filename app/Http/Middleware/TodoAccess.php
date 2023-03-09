<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class TodoAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $todo = $request->route('todo');
        if ($todo &&(Auth::user()->id !== $todo->user_id && !$todo->public)){
            return response (["message" => "You dont have acces to this todo"]);            
        }
        return $next($request);
    }
}
