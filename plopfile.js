module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Genera un componente con client, server, index y estilos',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nombre del componente:'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/ui/components/{{pascalCase name}}/{{pascalCase name}}.client.tsx',
        templateFile: 'plop-templates/component.client.hbs'
      },
      {
        type: 'add',
        path: 'src/ui/components/{{pascalCase name}}/{{pascalCase name}}.server.tsx',
        templateFile: 'plop-templates/component.server.hbs'
      },
      {
        type: 'add',
        path: 'src/ui/components/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/index.hbs'
      },
      {
        type: 'add',
        path: 'src/ui/components/{{pascalCase name}}/styles.scss',
        templateFile: 'plop-templates/styles.hbs'
      }
    ]
  })
}
