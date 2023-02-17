import { AuthController } from './Controllers/AuthController.js';
import { MatersController } from "./Controllers/MatersController.js";
import { ValuesController } from './Controllers/ValuesController.js';

class App {
  authController = new AuthController();
  valuesController = new ValuesController();

  matersController  = new MatersController();
}

// @ts-ignore
window.app = new App()
