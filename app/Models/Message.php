<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    //

    public function user(){
        return $this->belongsTo(app\Models\User::class);
    }
}
