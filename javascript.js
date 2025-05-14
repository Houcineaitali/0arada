<script>
  function openOrderForm(productName) {
    document.getElementById('order-form').style.display = 'block';
    document.getElementById('product-name').value = productName;
  }

  document.getElementById('confirm-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Optional: send data to server, or just show a confirmation
    alert("Thank you! Your order for " + document.getElementById('product-name').value + " has been placed. We will contact you soon.");
    
    this.reset();
    document.getElementById('order-form').style.display = 'none';
  });
</script>
