test('should successfully create a new item and close the form', async () => {
    const handleStoreItemSpy = jest.spyOn(handleStoreItem, 'resolve');
    const closeFormSpy = jest.spyOn(closeForm, 'closeForm');

    await create();

    expect(handleStoreItemSpy).toHaveBeenCalledWith(state.editedItem);
    expect(closeFormSpy).toHaveBeenCalledWith(state);
});