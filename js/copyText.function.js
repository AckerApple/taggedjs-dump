export function copyText(text) {
    var copyText = document.createElement('textarea');
    copyText.value = text;
    document.body.appendChild(copyText);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(copyText);
}
//# sourceMappingURL=copyText.function.js.map