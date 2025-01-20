async function api_call_test_task() {
    const response = await fetch('https://api.example.com/data');
    return response.json();
  }
  
  export default api_call_test_task;
  