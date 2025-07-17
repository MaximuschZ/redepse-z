"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // <- IMPORTANTE
import styles from "./login.module.css";
import Image from "next/image";
import logo from "@/public/favicon-sde.png"; // Asegurate de que esté en public o en assets

export default function Login() {
  const router = useRouter(); // <- USAMOS ESTO PARA REDIRECCIONAR

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (data) => {
    data.preventDefault();

    if (!email || !password) {
      setError("Por favor, ingrese ambos campos");
      return;
    }

    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.message || "Error al iniciar sesión");
        return;
      }

      const { user } = await res.json();

      // 🔁 Redirige según el rol
      if (user.tipo === "admin") {
        router.push("/escuelas-registradas");
      } else if (user.tipo === "escuela") {
        router.push("/datos-generales");
      } else {
        setError("Rol desconocido");
      }
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
      setError("Error en el servidor");
    }
  };

  /*
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Por favor, ingrese ambos campos");
      return;
    }

    setError("");
    alert(`Correo: ${email}, Contraseña: ${password}`);
  };
*/
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.logoContainer}>
          <Image
            src={logo}
            alt="Logo SDE"
            width={256}
            height={256}
            className={styles.logo}
            priority
          />
        </div>
        <h2 className={styles.title}>REDEPSE</h2>
        {error && <div className={styles.error}>{error}</div>}
        <form method="POST" onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
