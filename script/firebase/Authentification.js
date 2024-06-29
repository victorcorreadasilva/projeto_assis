import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

let error = null;
let loading = null;
let cancelled = false;

const auth = getAuth();

function checkIfIsCancelled() {
  if (cancelled) {
    return true;
  }
  return false;
}

// Register
async function createUser(data) {
  if (checkIfIsCancelled()) return;

  loading = true;
  error = null;

  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    await updateProfile(user, {
      displayName: data.email,
    });

    loading = false;
    return user;
  } catch (err) {
    let systemErrorMessage;

    if (err.message.includes("Password")) {
      systemErrorMessage = "A senha precisa conter ao menos 6 caracteres";
    } else if (err.message.includes("email-already-in-use")) {
      systemErrorMessage = "Email já cadastrado";
    } else {
      systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde";
    }

    loading = false;
    error = systemErrorMessage;
  }
}

// Login
async function login(data) {
  if (checkIfIsCancelled()) return;

  loading = true;
  error = null;

  try {
    await signInWithEmailAndPassword(auth, data.email, data.password);
    loading = false;
  } catch (err) {
    let systemErrorMessage;

    if (err.message.includes("user-not-found")) {
      systemErrorMessage = "Usuário não encontrado.";
    } else if (err.message.includes("wrong-password")) {
      systemErrorMessage = "Senha incorreta.";
    } else {
      systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde";
    }

    error = systemErrorMessage;
    loading = false;
  }
}

// Logout
function logout() {
  if (checkIfIsCancelled()) return;

  signOut(auth);
}

// Cleanup function
function cleanup() {
  cancelled = true;
}

export { auth, createUser, login, logout, cleanup, error, loading };
