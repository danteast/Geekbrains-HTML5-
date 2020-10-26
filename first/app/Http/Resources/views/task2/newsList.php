<?php

namespace App\Http\Resources\views\task2;

use Illuminate\Http\Resources\Json\JsonResource;

class newsList extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
