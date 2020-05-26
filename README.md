# Generate Script Template

<p>
<img alt="npm" src="https://img.shields.io/npm/dt/gen-tem">
</p>

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

## Want more templates?

I have only added template/s that I use often. If you want 
more templates, feel free to add them to 
[this](https://github.com/vighnesh153/single-page-templates) 
repository and they will be picked up by the `gen-tem` command.
