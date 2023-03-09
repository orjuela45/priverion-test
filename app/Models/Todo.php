<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Todo extends Model
{
    use HasFactory;

    protected $fillable = [
        "title",
        "description",
        "status",
        "public",
        "deleted",
        "user_id"
    ];

    public function closeTodo()
    {
        $this->update([
            $this->status = 0 
        ]);
    }
    
    public function changePublicTodo()
    {
        $this->update([
            $this->public = !$this->public
        ]);
    }

    public function deleteTodo()
    {
        $this->update([
            $this->deleted = 1
        ]);
    }

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}
