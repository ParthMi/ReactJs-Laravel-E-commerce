<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $susers = User::get();
        foreach ($susers as $suser) {
            if ($suser->email == $request['email']) {
                $response = [
                    'message' => 'Email id already exist please register with another email id',
                    'status' => 0,
                ];
                return response()->json($response);
            }
        }
        $user = new User;
        $user->name = $request['name'];
        $user->email = $request['email'];
        $user->password = bcrypt($request['password']);
        if ($user->save()) {
            $response = [
                'message' => 'User registered successfully',
                'status' => 1,
            ];
        } else {
            $response = [
                'message' => 'Registration failed',
                'status' => 0,
            ];
        }
        return response()->json($response);
    }


    public function login(Request $request)
    {
        $users = User::get();
        foreach ($users as $user) {
            if ($user->email == $request['email']) {
                if (Hash::check($request->password, $user->password)) {
					$uname=$user->name;
					$uid=$user->id;
                    $response = [
                        'message' => 'User logged in successfully',
                        'status' => 1,
						'name'=>$uname,
						'id'=>$uid
                    ];
                } else {
                    $response = [
                        'message' => 'Password is not correct',
                        'status' => 0,
                    ];
                }
                return response()->json($response);
            }
        }

        $response = [
            'message' => 'User not Exist',
            'status' => 0,
        ];
        return response()->json($response);
    }


    public function contact(Request $request)
    {
        $contact = new Contact;
        $contact->name = $request['name'];
        $contact->email = $request['email'];
        $contact->message = $request['message'];
        if ($contact->save()) {
            $response = [
                'message' => 'success',
                'status' => 1,
            ];
        } else {
            $response = [
                'message' => 'fail',
                'status' => 0,
            ];
        }
        return response()->json($response);
    }
}
