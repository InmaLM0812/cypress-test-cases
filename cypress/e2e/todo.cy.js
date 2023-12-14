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

})
