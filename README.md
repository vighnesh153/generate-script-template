# Generate Script Template

## Installation
```
npm install -g gst
```

> If you don't want to pollute your global package
> modules, 
> you can certainly use the `npx` package runner 
> to create templates but keep in mind that, that
> approach will be slower.  

##  Usage
### See available templates
```
gst --available
```
or
```
gst -a
```

### Create a file from template
```
gst <template-name> <my-file.extension>
```

### Shortcut create a file from template
Use characters until only one template matches.
```
gst <starting-chars-of-template-name> <my-file.extension>
gst <starting-chars-of-template-name> <ending-chars> <my-file.extension>
```

## Examples
Suppose `python_cp` is a name of a template.
```
gst python_cp myFile.py
gst py myFile.py
gst py cp myFile.py
gst py n_cp myFile.py
```
