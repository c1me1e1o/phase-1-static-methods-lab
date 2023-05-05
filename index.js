class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);

  }
  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = str.split(' ');
    const titleizedWords = words.map((word, index) => {
      if (index === 0) {
        return this.capitalize(word);
      } else if (exceptions.includes(word)) {
        return word;
      } else {
        return this.capitalize(word);
      }
    });
    return titleizedWords.join(' ');
    
  }
}