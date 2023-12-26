describe('Pruebas todoMVC', () => {
  it('crear tarea', () => {
    cy.visit('https://todomvc.com/examples/react/#/')
    cy.get('.new-todo').type("Tarea 1")
    cy.get('.new-todo').type("{enter}")
    cy.get('.todo-list').contains("Tarea 1")
  })

  it('marcar tarea como completada', () => {
    cy.visit('https://todomvc.com/examples/react/#/')
    cy.get('.new-todo').type("Tarea 2")
    cy.get('.new-todo').type("{enter}")
    cy.get('.toggle').click()
    cy.get('.todo-list').contains("Tarea 2")
  })

  it('desmarcar tarea completada', () => {
    cy.visit('https://todomvc.com/examples/react/#/')
    cy.get('.new-todo').type("Tarea 3")
    cy.get('.new-todo').type("{enter}")
    cy.get('.toggle').click()
    cy.get('.toggle').click()
    cy.get('.todo-list').contains("Tarea 3")
  })

  it('editar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/#/')
    cy.get('.new-todo').type("Tarea 4")
    cy.get('.new-todo').type("{enter}")
    cy.get('.view > label').dblclick()
    cy.get('.view > label').clear("Tarea 4")
    cy.get('.view > label').type("Nueva Tarea 4")
    cy.get('.view > label').type("{enter}")
    cy.get('.todo-list').contains("Nueva Tarea 4")
  })

  it('borrar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/#/')
    cy.get('.new-todo').type("Tarea 5")
    cy.get('.new-todo').type("{enter}")
  })

  it('filtrar tareas', () => {
    cy.visit('https://todomvc.com/examples/react/#/')
    cy.get('.new-todo').type("Tarea 6 completada")
    cy.get('.new-todo').type("{enter}")
    cy.get('.toggle').click()
    cy.get('.todo-list').contains("Tarea 6 completada")
    cy.get('.new-todo').type("Tarea 6 no completada")
    cy.get('.new-todo').type("{enter}")
    cy.get('.selected').click()
    cy.get('.selected').contains("Tarea 6 completada")
    cy.get('[data-reactid=".0.2.1.2"] > a').click()
    cy.get('[data-reactid=".0.2.1.2"] > a').contains("Tarea 6 no completada")
    cy.get('[data-reactid=".0.2.1.0"] > a').click("Tarea 6 completada, Tarea 6 completada")
 })

})
