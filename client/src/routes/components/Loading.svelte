<style>
  .loader-container {
    width: 50vw;
    height: 50vh;
    display: flex;
    overflow: hidden;
  }

  .loader {
    margin: auto;
    border: 5px dotted #dadada;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>

<div class="loader-container">
  <div class="loader" />
</div>
