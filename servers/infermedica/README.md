# Infermedica MCP by usefulapi

Run Infermedica symptom checks, diagnosis, triage and condition lookups. Hosted, no local install.

**Live endpoint:** `https://infermedica.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://infermedica.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http infermedica https://infermedica.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=infermedica&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Finfermedica.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "infermedica": {
      "url": "https://infermedica.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/infermedica/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Infermedica credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `infermedica_list_symptoms` | read | List symptoms |
| `infermedica_get_symptom` | read | Get symptom |
| `infermedica_list_conditions` | read | List conditions |
| `infermedica_get_condition` | read | Get condition |
| `infermedica_list_risk_factors` | read | List risk factors |
| `infermedica_get_risk_factor` | read | Get risk factor |
| `infermedica_list_lab_tests` | read | List lab tests |
| `infermedica_get_lab_test` | read | Get lab test |
| `infermedica_search_concepts` | read | Search concepts |
| `infermedica_get_info` | read | Get model info |
| `infermedica_diagnosis` | read | Compute diagnosis |
| `infermedica_triage` | read | Compute triage |
| `infermedica_explain` | read | Explain condition |
| `infermedica_suggest` | read | Suggest observations |
| `infermedica_rationale` | read | Get question rationale |
| `infermedica_parse` | read | Parse clinical text |
| `infermedica_recommend_specialist` | read | Recommend specialist |
| `infermedica_usage_status` | meta | Usage status (free-tier meter) |
| `infermedica_upgrade` | meta | Upgrade to Pro (unlimited) |
| `infermedica_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `infermedica_upgrade` (it returns a Stripe Checkout link). Cancel any time with `infermedica_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `infermedica_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
