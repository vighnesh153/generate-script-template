# Generate Script Template

## Installation
```
npm install -g gen-tem
```

> If you don't want to pollute your global package
> modules, 
> you can certainly use the `npx` package runner 
> to create templates but keep in mind that, that
> approach will be slower.  

##  Usage
### See available templates
```
gen-tem --available
```
or
```
gen-tem -a
```

### Create a file from template
```
gen-tem <template-name> <my-file.extension>
```

### Shortcut create a file from template
Use characters until only one template matches.
```
gen-tem <starting-chars-of-template-name> <my-file.extension>
gen-tem <starting-chars-of-template-name> <ending-chars> <my-file.extension>
```

## Examples
Suppose `python_cp` is a name of a template.
```
gen-tem python_cp myFile.py
gen-tem py myFile.py
gen-tem py cp myFile.py
gen-tem py n_cp myFile.py
```
