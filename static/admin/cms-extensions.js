CMS.registerEditorComponent({
    id: "summary-break",
    label: "Summary Break",
    fields: [],
    collapsed: true,
    pattern: /^<!--\s*more\s*-->$/,
    fromBlock: function(match) {
        return {};
    },
    toBlock: function(obj) {
        return `<!-- more -->`;
    },
    toPreview: function(obj) {
        return `<p><b>[SUMMARY ENDS only text above this in Summary]</b></p>`;
    },
});
CMS.registerEditorComponent({
    id: "gpx-map",
    label: "GPX File Map",
    fields: [],
    collapsed: true,
    pattern: /^{{[<%]\s*gpxmap\s*[%>]}}$/i,
    fromBlock: function(match) {
        return {};
    },
    toBlock: function(obj) {
        return `{{< gpxmap >}}`;
    },
    toPreview: function(obj) {
        return `<p><b>[INTERACTIVE GPX MAP]</b><p>`;
    },
});
CMS.registerEditorComponent({
    id: "gpx-ref",
    label: "GPX File Reference",
    fields: [],
    collapsed: true,
    pattern: /{{[<%]\s*gpxref\s*[%>]}}/g,
    fromBlock: function(match) {
        return {};
    },
    toBlock: function(obj) {
        return `{{< gpxref >}}`;
    },
    toPreview: function(obj) {
        return `<b>[LINK TO GPX FILE]</b>`;
    },
});
