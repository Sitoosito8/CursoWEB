<?php
if (!empty($_POST['nombre']) && !empty($_POST['apellido'])) {
  echo "Hola, " . htmlspecialchars($_POST['nombre']) . " " . htmlspecialchars($_POST['apellido']);
} else {
?>
  <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
    <p><label for="nombre">Nombre:</label>
      <input type="text" name="nombre" id="nombre" requiered/>
    </p>
    <p><label for="apellido">Apellido:</label>
      <input type="text" name="apellido" id="apellido" requiered/>
    </p>
    <input type="submit" value="Enviar" />
  </form>
<?php } ?>


