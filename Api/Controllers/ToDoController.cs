using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class ToDoController : ControllerBase
{
    private static List<ToDo> _ToDos = new List<ToDo>
    {
        new ToDo { Id = "1233", Text = "test" }
    };

    [HttpGet]
    public List<ToDo> GetAll() => _ToDos;

    [HttpPost]
    public ToDo Add(ToDo _toDo)
    {
        _ToDos.Add(_toDo);

        return _toDo;
    }

    [HttpPut]
    public ToDo Update(ToDo _toDo)
    {
        var _toDoToUpdate = _ToDos.FirstOrDefault(x=>x.Id == _toDo.Id);

        _toDoToUpdate.Text = _toDo.Text;

        return _toDo;
    }

    [HttpDelete("{_id}")]
    public ToDo Update(string _id)
    {
        var _toDo = _ToDos.FirstOrDefault(x=>x.Id == _id);

        _ToDos.Remove(_toDo);

        return _toDo;
    }
}

public class ToDo
{
    public string Id { get; set; }
    public string Text { get; set; }
}
