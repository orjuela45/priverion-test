<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TodoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
            "id" => $this->id,
            "title" => $this->title,
            "description" => $this->description,
            "status" => intval($this->status),
            "public" => intval($this->public),
            "user"=> $this->user,
        ];
    }
}
