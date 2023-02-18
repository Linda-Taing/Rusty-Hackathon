import { AuthController } from './Controllers/AuthController.js';
import { ForeignProfilesController } from './Controllers/ForeignProfilesController.js';
import { HeaderButtonsController } from './Controllers/HeaderButtonsController.js';
import { MatersController } from "./Controllers/MatersController.js";
import { StatusUpdatesController } from './Controllers/StatusUpdatesController.js';
import { ValuesController } from './Controllers/ValuesController.js';

class App {
  authController = new AuthController();
  valuesController = new ValuesController();

  foreignProfilesController = new ForeignProfilesController();
  headerButtonsController = new HeaderButtonsController();
  matersController = new MatersController();
  statusUpdatesController = new StatusUpdatesController();
}

// @ts-ignore
window.app = new App()
