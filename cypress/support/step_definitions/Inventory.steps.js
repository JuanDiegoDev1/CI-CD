import { Then } from '@badeball/cypress-cucumber-preprocessor';
import InventoryPage from '../../e2e/pages/InventoryPage';

const inventoryPage = new InventoryPage();

Then('debería ver la página de productos', () => {
  inventoryPage.assertLoginSuccess();
});
