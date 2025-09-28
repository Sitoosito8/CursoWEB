<?php
if (!empty($_POST['modulos'])) {
  echo "Has elegido los módulos: " . implode(", ", $_POST['modulos']);
} else {
?>
  <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
    <p>
      <input type="checkbox" name="modulos[]" value="DWES" id="dwes" />
      <label for="dwes">Desarrollo web en entorno servidor</label>
    </p>
    <p>
      <input type="checkbox" name="modulos[]" value="DWEC" id="dwec" />
      <label for="dwec">Desarrollo web en entorno cliente</label>
    </p>
    <input type="submit" value="Enviar" />
  </form>
<?php } ?>



