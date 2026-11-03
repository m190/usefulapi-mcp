# NCBI PubMed MCP by usefulapi

Use your [NCBI PubMed](https://pubmed.ncbi.nlm.nih.gov) account from Claude, Cursor, or any MCP client. Search PubMed, read article summaries and abstracts, find similar articles, and read the database's search fields, all read-only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://pubmed-ncbi-e-utilities.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://pubmed-ncbi-e-utilities.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http pubmed-ncbi-e-utilities https://pubmed-ncbi-e-utilities.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=pubmed-ncbi-e-utilities&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpubmed-ncbi-e-utilities.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "pubmed-ncbi-e-utilities": {
      "url": "https://pubmed-ncbi-e-utilities.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your NCBI PubMed credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/pubmed-ncbi-e-utilities/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **NCBI API key**, created in your NCBI account under **Settings → API Key Management**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `pubmed_search` | read | Search PubMed |
| `pubmed_summary` | read | Get article summaries |
| `pubmed_fetch_abstracts` | read | Get abstracts |
| `pubmed_related` | read | Find related articles |
| `pubmed_database_info` | read | PubMed database info |
| `pubmed_usage_status` | meta | Usage status (free-tier meter) |
| `pubmed_request_feature` | meta | Request a missing feature |
| `pubmed_upgrade` | meta | Upgrade to Pro or Pro+ |
| `pubmed_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `pubmed_upgrade` (it returns a Stripe Checkout link). Cancel any time with `pubmed_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `pubmed_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
