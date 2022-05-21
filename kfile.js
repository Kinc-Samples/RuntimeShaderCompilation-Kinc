const project = new Project('ShaderTest');

await project.addProject('Kinc');

await project.addProject('krafix');

project.addFile('Sources/**');
project.setDebugDir('Deployment');

project.flatten();

resolve(project);
