# RxNorm MCP by usefulapi

Look up drug names, RxCUIs, ingredients and interactions in RxNorm. Hosted, no local install.

**Live endpoint:** `https://rxnorm.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://rxnorm.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http rxnorm https://rxnorm.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=rxnorm&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frxnorm.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "rxnorm": {
      "url": "https://rxnorm.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your email address and a 6-digit code.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/rxnorm/

<!-- connect:end (generated above, edit below) -->

This server needs **no credential** — RxNorm is a public data source. On first
connect you log in with your email: we send a 6-digit code from `login@usefulapi.io`. The address
is used only to send the code; we keep a one-way hash of it as your account id, so your free calls
and your plan stay yours.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `rxnorm_find_rxcui_by_name` | read | Find RxCUI by name |
| `rxnorm_get_drugs` | read | Search drugs by name |
| `rxnorm_get_concept_properties` | read | Get concept properties |
| `rxnorm_get_related_by_type` | read | Get related concepts by type |
| `rxnorm_get_all_related` | read | Get all related concepts |
| `rxnorm_get_ndcs` | read | Get NDCs for a concept |
| `rxnorm_get_history_status` | read | Get concept history / status |
| `rxnorm_get_property` | read | Get concept property |
| `rxnorm_get_spelling_suggestions` | read | Get spelling suggestions |
| `rxnorm_get_approximate_match` | read | Approximate term match |
| `rxnorm_get_term_types` | read | List term types |
| `rxnorm_get_drug_classes` | read | Get drug classes for a drug |
| `rxnorm_get_class_members` | read | Get drug class members |
| `rxnorm_usage_status` | meta | Usage status (free-tier meter) |
| `rxnorm_request_feature` | meta | Request a missing feature |
| `rxnorm_upgrade` | meta | Upgrade to Pro or Pro+ |
| `rxnorm_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `rxnorm_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `rxnorm_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `rxnorm_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
