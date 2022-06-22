const project = new Project('ShaderTest');

await project.addProject('Kinc');

const krafix = await project.addProject('krafix');
krafix.useAsLibrary();

project.addFile('Sources/**');
project.setDebugDir('Deployment');

project.flatten();

resolve(project);
