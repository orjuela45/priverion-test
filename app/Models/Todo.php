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

    public function closeTask()
    {
        $this->update([
            $this->status = 0 
        ]);
    }
    
    public function changePublicTask()
    {
        $this->update([
            $this->public = !$this->public
        ]);
    }

    public function deleteTask()
    {
        $this->update([
            $this->deleted = 0 
        ]);
    }

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}
