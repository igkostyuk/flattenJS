describe("Функция flatten", () => {
  it("возвращает массив", () => {
    expect(Array.isArray(flatten([]))).toEqual(true);
  });

  it("упрощает массив строк", () => {
    const input = ["1", ["2"], "3"];
    expect(flatten(input)).toEqual(["1", "2", "3"]);
  });
});
