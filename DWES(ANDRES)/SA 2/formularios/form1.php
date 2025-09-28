<?php
if (!empty($_POST['nombre'])) {
  echo "Hola, " . htmlspecialchars($_POST['nombre']);
} else {
?>
  <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
    <p><label for="nombre">Nombre del alumno:</label>
      <input type="text" name="nombre" id="nombre" />
    </p>
    <input type="submit" value="Enviar" />
  </form>
<?php } ?>

