module.exports = {
  getAllTodos: (req, res) => {
    const db = req.app.get('db');

    db.get_all_todos().then(response => {
      res.status(200).send(response);
    }).catch(err => {
      console.log(err);
      res.status(500).send(err);
      return;
    });
  },
  getTodo: (req, res) => {
    
  },
  createTodo: (req, res) => {
    
  },
  updateTodo: (req, res) => {
    
  },
  deleteTodo: (req, res) => {
    
  }
}