<?php

namespace App\Http\Controllers;


use Auth;
use App\Models\Message;
use App\Models\user;
use Illuminate\Http\Request;
use App\Events\ChatCreated;


class ChatController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        return view('chat.index');
    }

    public function getMessages()
    {
        return Message::with('user')->orderBy('created_at', 'desc')->take(10)->get();
    }

    public function postMessage(Request $request)
    {
        
        // dd('masuk controller');

        $message = Message::create([
            'subject' => $request->subject,
            'user_id' => Auth::user()->id,
        ]);
        

        // send broadcast
        broadcast(new ChatCreated($message))->toOthers();

        
        return $message;
    }
}
