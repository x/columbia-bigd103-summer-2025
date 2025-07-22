import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup((monaco) => {
  monaco.editor.defineTheme('solarized-light', {
    base: 'vs',
    inherit: true,
    rules: [
      // Comments
      { token: 'comment', foreground: '93a1a1', fontStyle: 'italic' },
      { token: 'comment.line', foreground: '93a1a1', fontStyle: 'italic' },
      { token: 'comment.block', foreground: '93a1a1', fontStyle: 'italic' },
      
      // Keywords
      { token: 'keyword', foreground: '859900', fontStyle: 'bold' },
      { token: 'keyword.control', foreground: '859900', fontStyle: 'bold' },
      { token: 'keyword.operator', foreground: '859900' },
      { token: 'keyword.other', foreground: '859900' },
      
      // Storage types (class, function, var, etc.)
      { token: 'storage', foreground: '268bd2', fontStyle: 'bold' },
      { token: 'storage.type', foreground: '268bd2', fontStyle: 'bold' },
      { token: 'storage.modifier', foreground: '268bd2' },
      
      // Strings
      { token: 'string', foreground: '2aa198' },
      { token: 'string.quoted', foreground: '2aa198' },
      { token: 'string.template', foreground: '2aa198' },
      { token: 'string.regexp', foreground: 'dc322f' },
      
      // Numbers
      { token: 'constant.numeric', foreground: 'd33682' },
      { token: 'number', foreground: 'd33682' },
      
      // Constants
      { token: 'constant', foreground: 'd33682' },
      { token: 'constant.language', foreground: 'd33682', fontStyle: 'bold' },
      { token: 'constant.character', foreground: 'd33682' },
      { token: 'constant.other', foreground: 'd33682' },
      
      // Variables
      { token: 'variable', foreground: '268bd2' },
      { token: 'variable.parameter', foreground: '268bd2' },
      { token: 'variable.other', foreground: '268bd2' },
      
      // Functions
      { token: 'entity.name.function', foreground: '268bd2', fontStyle: 'bold' },
      { token: 'support.function', foreground: '268bd2' },
      
      // Types/Classes
      { token: 'entity.name.type', foreground: 'b58900', fontStyle: 'bold' },
      { token: 'entity.name.class', foreground: 'b58900', fontStyle: 'bold' },
      { token: 'support.type', foreground: 'b58900' },
      { token: 'support.class', foreground: 'b58900' },
      
      // Attributes/Properties
      { token: 'entity.other.attribute-name', foreground: '859900' },
      { token: 'support.constant', foreground: 'd33682' },
      
      // Operators
      { token: 'keyword.operator.comparison', foreground: '859900' },
      { token: 'keyword.operator.assignment', foreground: '859900' },
      { token: 'keyword.operator.arithmetic', foreground: '859900' },
      { token: 'keyword.operator.logical', foreground: '859900' },
      
      // Punctuation
      { token: 'punctuation', foreground: '586e75' },
      { token: 'punctuation.definition', foreground: '586e75' },
      { token: 'punctuation.separator', foreground: '586e75' },
      
      // Meta/Preprocessor
      { token: 'meta.preprocessor', foreground: 'cb4b16' },
      { token: 'meta.tag', foreground: '268bd2' },
      
      // Invalid/Error
      { token: 'invalid', foreground: 'dc322f', fontStyle: 'bold' },
      { token: 'invalid.deprecated', foreground: 'dc322f', fontStyle: 'bold' },
      
      // Language-specific tokens
      // Python
      { token: 'support.function.builtin.python', foreground: '268bd2' },
      { token: 'constant.language.python', foreground: 'd33682' },
      
      // JavaScript/TypeScript
      { token: 'support.variable.dom.js', foreground: '268bd2' },
      { token: 'support.constant.js', foreground: 'd33682' },
      { token: 'entity.name.type.ts', foreground: 'b58900' },
      
      // CSS
      { token: 'support.type.property-name.css', foreground: '268bd2' },
      { token: 'constant.numeric.css', foreground: 'd33682' },
      { token: 'support.constant.color.css', foreground: '2aa198' },
      
      // HTML
      { token: 'entity.name.tag.html', foreground: '268bd2' },
      { token: 'entity.other.attribute-name.html', foreground: '859900' },
      
      // JSON
      { token: 'string.quoted.double.json', foreground: '2aa198' },
      { token: 'constant.numeric.json', foreground: 'd33682' },
      
      // Markdown
      { token: 'markup.heading', foreground: '268bd2', fontStyle: 'bold' },
      { token: 'markup.bold', fontStyle: 'bold' },
      { token: 'markup.italic', fontStyle: 'italic' },
      { token: 'markup.underline', fontStyle: 'underline' },
      { token: 'markup.list', foreground: '859900' },
      { token: 'markup.quote', foreground: '93a1a1', fontStyle: 'italic' },
      { token: 'markup.inline.raw', foreground: '2aa198' },
      { token: 'markup.fenced_code', foreground: '2aa198' },
    ],
    colors: {
      // Editor background and foreground
      'editor.background': '#fdf6e3',
      'editor.foreground': '#657b83',
      
      // Line highlighting
      'editor.lineHighlightBackground': '#eee8d5',
      'editor.lineHighlightBorder': '#eee8d5',
      
      // Cursor
      'editorCursor.foreground': '#657b83',
      'editorCursor.background': '#fdf6e3',
      
      // Selection
      'editor.selectionBackground': '#eee8d5',
      'editor.selectionHighlightBackground': '#eee8d5',
      'editor.inactiveSelectionBackground': '#eee8d5',
      
      // Word highlighting
      'editor.wordHighlightBackground': '#eee8d580',
      'editor.wordHighlightStrongBackground': '#eee8d5',
      
      // Find/replace
      'editor.findMatchBackground': '#b58900',
      'editor.findMatchHighlightBackground': '#b5890080',
      'editor.findRangeHighlightBackground': '#eee8d5',
      
      // Gutter (line numbers)
      'editorLineNumber.foreground': '#93a1a1',
      'editorLineNumber.activeForeground': '#586e75',
      'editorGutter.background': '#fdf6e3',
      
      // Indentation guides
      'editorIndentGuide.background': '#eee8d5',
      'editorIndentGuide.activeBackground': '#93a1a1',
      
      // Whitespace
      'editorWhitespace.foreground': '#eee8d5',
      
      // Ruler
      'editorRuler.foreground': '#eee8d5',
      
      // Scrollbar
      'scrollbar.shadow': '#00000020',
      'scrollbarSlider.background': '#93a1a180',
      'scrollbarSlider.hoverBackground': '#93a1a1',
      'scrollbarSlider.activeBackground': '#586e75',
      
      // Widget backgrounds
      'editorWidget.background': '#eee8d5',
      'editorWidget.border': '#93a1a1',
      'editorSuggestWidget.background': '#eee8d5',
      'editorSuggestWidget.border': '#93a1a1',
      'editorSuggestWidget.foreground': '#657b83',
      'editorSuggestWidget.selectedBackground': '#93a1a140',
      'editorSuggestWidget.highlightForeground': '#268bd2',
      
      // Hover widget
      'editorHoverWidget.background': '#eee8d5',
      'editorHoverWidget.border': '#93a1a1',
      
      // Error/warning squiggles
      'editorError.foreground': '#dc322f',
      'editorWarning.foreground': '#b58900',
      'editorInfo.foreground': '#268bd2',
      'editorHint.foreground': '#859900',
      
      // Bracket matching
      'editorBracketMatch.background': '#eee8d5',
      'editorBracketMatch.border': '#93a1a1',
      
      // Overview ruler (minimap area)
      'editorOverviewRuler.border': '#eee8d5',
      'editorOverviewRuler.findMatchForeground': '#b58900',
      'editorOverviewRuler.rangeHighlightForeground': '#eee8d5',
      'editorOverviewRuler.selectionHighlightForeground': '#eee8d5',
      'editorOverviewRuler.wordHighlightForeground': '#eee8d580',
      'editorOverviewRuler.wordHighlightStrongForeground': '#eee8d5',
      'editorOverviewRuler.modifiedForeground': '#268bd2',
      'editorOverviewRuler.addedForeground': '#859900',
      'editorOverviewRuler.deletedForeground': '#dc322f',
      'editorOverviewRuler.errorForeground': '#dc322f',
      'editorOverviewRuler.warningForeground': '#b58900',
      'editorOverviewRuler.infoForeground': '#268bd2',
    }
  })
  
  return {
    theme: 'solarized-light',
    options: {
      fontSize: 14,
      lineHeight: 1.5,
      fontFamily: "'Fira Code', 'Monaco', 'Consolas', monospace",
      fontLigatures: true,
      minimap: {
        enabled: false // Usually better for presentations
      },
      scrollBeyondLastLine: false,
      automaticLayout: true,
      wordWrap: 'on',
      lineNumbers: 'on',
      renderWhitespace: 'boundary',
      renderControlCharacters: false,
      renderIndentGuides: true,
      folding: true,
      foldingHighlight: true,
      showFoldingControls: 'mouseover',
      matchBrackets: 'always',
      glyphMargin: false,
      lineDecorationsWidth: 0,
      lineNumbersMinChars: 3,
      overviewRulerBorder: false,
      hideCursorInOverviewRuler: true,
      contextmenu: false,
      mouseWheelZoom: false,
      smoothScrolling: true,
    }
  }
})