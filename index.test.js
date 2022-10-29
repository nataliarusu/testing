test('Make url should create correct url', ()=>{
    equal(makeUrl('pikachu'),'https://pokeapi.co/api/v2/pikachu');
});
test('create an object from a querystring', ()=>{
    // equal(searchParamsToObject("name=oliver&email=hello@oliverjam.es"),{name: 'oliver', email: 'hello@oliverjam.es'})
    //won't work because test will compare two objects. we can compare the obj's props in this case
    const actual = searchParamsToObject("name=oliver&email=hello@oliverjam.es");
    const expected = {name: 'oliver', email: 'hello@oliverjam.es'};
    equal(actual.name, expected.name);
    equal(actual.email, expected.email);
});

test('invalid input value should be handled and the appropriate message displayed', ()=>{
    const inputEl=form.querySelector('#year');
    const btn=form.querySelector("button[type='submit']");
    inputEl.value=-10;
    btn.click();
    equal(output.textContent, 'Year can not be negative');

    inputEl.value='abc';
    btn.click();
    equal(output.textContent, 'Please enter number');
    output.innerHTML='';
    inputEl.value='';
});



test('isLeapYear() should handle multiple of 4 and 400', ()=>{
    equal(isLeapYear(400), true);
    equal(isLeapYear(1600), true);
    equal(isLeapYear(16), true);
});
test('isLeapYear() should handle multiple of 100', ()=>{
    equal(isLeapYear(100), false);
    equal(isLeapYear(2020), true);
    equal(isLeapYear(2100), false);
    equal(isLeapYear(1800), false);
});