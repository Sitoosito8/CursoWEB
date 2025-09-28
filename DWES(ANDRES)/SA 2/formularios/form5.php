<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Recoger y limpiar los datos
    $nombre = trim($_POST["nombre"] ?? "");
    $email  = trim($_POST["email"] ?? "");

    $errores = [];

    // Validar nombre
    if (empty($nombre)) {
        $errores[] = "Por favor, escribe tu nombre.";
    }

    // Validar email
    if (empty($email)) {
        $errores[] = "Por favor, escribe tu correo electrónico.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errores[] = "El correo electrónico no es válido.";
    }

    // Mostrar resultados
    if (empty($errores)) {
        echo "<h2>Formulario enviado correctamente</h2>";
        echo "<p><strong>Nombre:</strong> " . htmlspecialchars($nombre) . "</p>";
        echo "<p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>";
    } else {
        echo "<h3>Se han encontrado errores:</h3><ul>";
        foreach ($errores as $error) {
            echo "<li>" . htmlspecialchars($error) . "</li>";
        }
        echo "</ul>";
    }
}
?>



