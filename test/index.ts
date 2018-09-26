import * as ast from '../src';

ast.log('magenta');
ast.info('cyan')
ast.warn('yellow')
ast.error('red')
ast.success('green')
ast.dev('bgcyan without process env dev')
process.env.NODE_ENV = 'development';
ast.dev('bgcyan with process env dev')
ast.bp('bgmagenta')
