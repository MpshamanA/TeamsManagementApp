import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { RouteComponentProps, Link } from "react-router-dom";

import { User } from "../Type";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  Auth,
  getAuth,
} from "firebase/auth";

export const useFetchUser = () => {};
