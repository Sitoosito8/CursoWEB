<?php
if (!empty($_POST['acepto'])) {
  echo "Has aceptado las condiciones.";
} else {
?>
  <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
    <p>
      <input type="checkbox" name="acepto" id="acepto" value="1" />
      <label for="acepto">Acepto las condiciones</label>
    </p>
    <input type="submit" value="Enviar" />
  </form>
<?php } ?>



