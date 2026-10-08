# openFDA MCP by usefulapi

Search openFDA drug, device, food and adverse-event datasets. Hosted, no local install.

**Live endpoint:** `https://openfda.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://openfda.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http openfda https://openfda.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=openfda&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fopenfda.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "openfda": {
      "url": "https://openfda.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/openfda/

<!-- connect:end (generated above, edit below) -->

This server needs **no credential** — openFDA is a public data source. On first
connect you log in with your email: we send a 6-digit code from `login@usefulapi.io`. The address
is used only to send the code; we keep a one-way hash of it as your account id, so your free calls
and your plan stay yours.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `search_drug_events` | read | Search drug adverse-event reports (FAERS) |
| `search_drug_labels` | read | Search drug product labels (SPL) |
| `search_drug_ndc` | read | Search the National Drug Code directory |
| `search_drug_recalls` | read | Search drug recall enforcement reports |
| `search_drugsfda` | read | Search Drugs@FDA approved products |
| `search_drug_shortages` | read | Search drug shortages |
| `search_device_events` | read | Search device adverse-event reports (MAUDE) |
| `search_device_510k` | read | Search 510(k) premarket clearances |
| `search_device_recalls` | read | Search device recalls |
| `search_device_classification` | read | Search device classification |
| `search_food_events` | read | Search food/supplement/cosmetic adverse events (CAERS) |
| `search_food_recalls` | read | Search food recall enforcement reports |
| `count` | read | Count/aggregate over an openFDA dataset |
| `openfda_query` | read | Query any openFDA endpoint (generic) |
| `openfda_usage_status` | meta | Usage status (free-tier meter) |
| `openfda_upgrade` | meta | Upgrade to Pro (unlimited) |
| `openfda_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `openfda_upgrade` (it returns a Stripe Checkout link). Cancel any time with `openfda_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `openfda_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
