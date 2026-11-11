# SmartDoctor MCP by usefulapi

Use your SmartDoctor account from Claude, Cursor, or any MCP client. Find open slots, read appointments and prices, and book, move or cancel consultations. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://smartdoctor.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://smartdoctor.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http smartdoctor https://smartdoctor.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=smartdoctor&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsmartdoctor.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "smartdoctor": {
      "url": "https://smartdoctor.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SmartDoctor credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/smartdoctor/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **SmartDoctor API key** (Perfil › Configurações › Integrações › Nova chave in SmartDoctor; shown once). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `smartdoctor_list_appointments` | read | List appointments |
| `smartdoctor_get_appointment` | read | Get an appointment |
| `smartdoctor_check_appointment_conflict` | read | Check for a duplicate appointment |
| `smartdoctor_list_free_slots` | read | List free time slots |
| `smartdoctor_find_patient_by_cpf` | read | Find a patient by CPF |
| `smartdoctor_list_prices` | read | List consultation prices |
| `smartdoctor_create_appointment` | **write** | Create an appointment |
| `smartdoctor_reschedule_appointment` | **write** | Reschedule an appointment |
| `smartdoctor_cancel_appointment` | **write** | Cancel an appointment |
| `smartdoctor_usage_status` | meta | Usage status (free-tier meter) |
| `smartdoctor_request_feature` | meta | Request a missing feature |
| `smartdoctor_upgrade` | meta | Upgrade to Pro or Pro+ |
| `smartdoctor_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `smartdoctor_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `smartdoctor_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `smartdoctor_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
