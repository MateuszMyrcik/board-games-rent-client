import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import { BoardGamesApiURL } from "../../interfaces/generic.def";

export const enum AuthFormType {
  Registration,
  Login,
}

interface IAuthFormProps {
  type: AuthFormType;
}

const AuthForm: React.FunctionComponent<IAuthFormProps> = ({ type }) => {
  const [authState, setAuthState] = useState({
    username: "",
    password: "",
    repeatPassword: "",
  });

  const onLoginClick = () => {
    fetch(BoardGamesApiURL.Login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authState),
    })
      .then((response) => {
        if (response.status === 401) {
          alert("Invalid user data");
          resetState();
          throw "Invalid user data";
        } else {
          alert("Your are logged in!");
          return response.json();
        }
      })
      .then((response) => {
        sessionStorage.setItem("token", response.acces_token);

        Router.push({
          pathname: "/products",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onRegisterClick = () => {
    if (authState.password !== authState.repeatPassword) {
      alert("Passwords are diffrent!");
      resetState();
      return;
    } else if (!authState.password.length || !authState.username.length) {
      alert("Password or user name cannot be empty!");
      resetState();
      return;
    }

    fetch(BoardGamesApiURL.Register, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authState),
    })
      .then((response) => {
        if (response.status === 400) {
          alert("Username is already in use");
          resetState();
        } else {
          alert("Your registration was succesfull!");

          Router.push({
            pathname: "/login",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resetState = () => {
    setAuthState({
      username: "",
      password: "",
      repeatPassword: "",
    });
  };

  const handleInputChange = (event: any) => {
    const { value, id } = event.target;

    setAuthState({ ...authState, [`${id}`]: value });
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div className="mb-4">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="username"
        >
          {type === AuthFormType.Login ? "Username:" : "Insert your username:"}
        </label>
        <input
          onInput={(event) => handleInputChange(event)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="username"
          type="text"
          value={authState.username}
          placeholder="Username"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="password"
        >
          {type === AuthFormType.Login ? "Password:" : "Insert your password:"}
        </label>
        <input
          onInput={(event) => handleInputChange(event)}
          className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker"
          id="password"
          type="password"
          value={authState.password}
          placeholder="******************"
        />

        {/* <p className="text-red text-xs italic">Please choose a password.</p> */}
      </div>

      {type === AuthFormType.Login ? null : (
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Repeat your password
          </label>
          <input
            onInput={(event) => handleInputChange(event)}
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="repeatPassword"
            type="password"
            value={authState.repeatPassword}
            placeholder="******************"
          />

          {/* <p className="text-red text-xs italic">Please choose a password.</p> */}
        </div>
      )}

      <div className="flex items-center justify-center">
        <button
          className="bg-blue hover:bg-indigo-700 hover:text-white font-bold py-2 px-4 rounded border-2"
          type="button"
          onClick={() => {
            type === AuthFormType.Login ? onLoginClick() : onRegisterClick();
          }}
        >
          {type === AuthFormType.Login ? "Sign In" : "Register"}
        </button>
      </div>
      <div className="font-normal italic text-xs flex justify-end mt-5">
        {type === AuthFormType.Login ? (
          <a
            className="inline-block align-baseline text-blue hover:text-blue-darker hover:underline"
            href="#"
          >
            <Link href="/register">Create new account</Link>
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default AuthForm;
