import { test } from '@playwright/test';

test.only('the first test', async ({page}) => {
    await page.goto("http://google.com")
    await page.getByText('Accept all').click()
})