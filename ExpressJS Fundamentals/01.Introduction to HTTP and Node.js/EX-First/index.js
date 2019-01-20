const storage = require("./storage")

storage.put('First', 'FirstPlayer')
storage.put('Second', 'SecondPlayer')
console.log(storage.getAll())
storage.update('First', 'ChangedFirstPlayer')
console.log(storage.get('First'));
storage.delete('Second')
storage.save()
storage.load()
console.log(storage.getAll());
storage.put('Last', 'LastPlayer')
storage.save()
storage.load()



