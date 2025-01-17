<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request){
        try{
            //Valida datos de entrada del Request
            $validated = $request->validate([
                'name' => 'required|max:255',
                'lastname'=> 'required|max:255',
                'phone' => 'required|max:255',
                'email'=> 'required|email|unique:users|max:255',
                'password' => 'required|confirmed'
            ]);
            
            //Crea usuario
            $user = User::create(([
                'name' => $validated["name"],
                'lastname' => $validated["lastname"],
                'phone' => $validated["phone"],
                'email' => $validated["email"],
                'password' => Hash::make($validated['password']),
            ]));
            
            //crear Token
            $token = $user->createToken($validated["email"])->plainTextToken;
            
            //Retorna usuario registrado y token de accesso
            return Response() -> json([
                "user" => $user,
                "access" => $token
            ], 200);
        }
        catch(Exception $e)
        {
            return Response()->json([
                "error" => $e->getMessage()
            ], 500);
        }
    }
    public function login(Request $request){
        try{
            //Valida datos de entrada del Request
            $validated = $request->validate([
                'email'=> "required|email|max:255",
                'password'=> "required|max:255",
            ]);
            //Busca el email del usuario
            $user = User::where('email', $validated["email"])->first();

            //Si no se encuentra el usuario o la contraseña no corresponde, retorna 401
            if (!$user || !Hash::check($validated['password'], $user->password)) {
                return response()->json(['message' => 'Credenciales incorrectas'], 401);
            }
            //Crea token de sesión
            $token = $user->createToken($validated["email"])->plainTextToken;

            //Retorna Token
            return response()->json([
                'access' => $token
            ],200);            
        }
        catch(Exception $e)
        {
            return Response()->json([
                "error" => $e->getMessage()
            ], 500);
        }    
    }

    public function logout(Request $request){
        $request->user()->tokens()->delete();
        return Response()->json(["message" => "Sesión Cerrada correctamente"], 200);
    }
}
