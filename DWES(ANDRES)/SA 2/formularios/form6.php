<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario sticky form</title>
</head>
<body>
<?php
$nombre = "";
$errores = [];

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = trim($_POST["nombre"] ?? "");

    if (empty($nombre)) {
        $errores[] = "Por favor, escribe tu nombre.";
    }

    if (empty($errores)) {
        echo "<h2>¡Hola, " . htmlspecialchars($nombre) . "!</h2>";
        // exit(); // se puede usar para no mostrar de nuevo el formulario
    } else {
        echo "<h3>Se han encontrado errores:</h3><ul>";
        foreach ($errores as $error) {
            echo "<li>" . htmlspecialchars($error) . "</li>";
        }
        echo "</ul>";
    }
}
?>

<h1>Introduce tu nombre</h1>
<form action="form6.php" method="post">
    <label for="nombre">Nombre:</label><br>
    <input type="text" id="nombre" name="nombre" 
           value="<?= htmlspecialchars($nombre) ?>" required>
    <br><br>

    <input type="submit" value="Enviar">
</form>
</body>
</html>

