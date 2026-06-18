/**
 * RELAXGO V2 - Arbitrage Engine
 * Generator 100 Pair Real-time
 */

// 1. Daftar Nama Koin & Exchange
const coins = ["BTC", "ETH", "BNB", "SOL", "XRP", "ADA", "DOT", "AVAX", "MATIC", "LINK"];
const exchanges = ["Binance", "KuCoin", "Bybit", "Kraken", "OKX"];

// 2. Fungsi untuk Menghasilkan 100 Pair Otomatis
function generatePairs() {
    let pairHtml = `
        <div class="table-container" style="margin-top:20px;">
            <table id="pair-table">
                <thead>
                    <tr>
                        <th>Asset Pair</th>
                        <th>Buy At</th>
                        <th>Sell At</th>
                        <th>Profit %</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="pair-body">
                    </tbody>
            </table>
        </div>
    `;
    
    // Masukkan kerangka tabel ke dalam div scan-results
    document.getElementById('scan-results').innerHTML = pairHtml;
    updatePairData(); // Isi datanya
}

// 3. Fungsi Simulasi Pergerakan Harga (100 Baris)
function updatePairData() {
    const tbody = document.getElementById('pair-body');
    if (!tbody) return;

    let rows = "";
    for (let i = 1; i <= 100; i++) {
        const coin = coins[Math.floor(Math.random() * coins.length)];
        const ex1 = exchanges[Math.floor(Math.random() * exchanges.length)];
        const ex2 = exchanges.filter(e => e !== ex1)[Math.floor(Math.random() * (exchanges.length - 1))];
        
        const price = (Math.random() * 1000).toFixed(2);
        const profit = (Math.random() * 2.5).toFixed(2);
        const profitColor = profit > 1.5 ? 'var(--neon-green)' : 'var(--gold-light)';

        rows += `
            <tr>
                <td><strong>${coin}/USDT</strong><br><small style="color:#666">Pair #${i}</small></td>
                <td><span style="font-size:10px; color:#888">${ex1}</span><br>$${price}</td>
                <td><span style="font-size:10px; color:#888">${ex2}</span><br>$${(price * (1 + profit/100)).toFixed(2)}</td>
                <td style="color:${profitColor}; font-weight:bold;">+${profit}%</td>
                <td><button class="btn-gold" style="padding:5px 10px; font-size:10px;" onclick="executeTrade('${coin}')">EXECUTE</button></td>
            </tr>
        `;
    }
    tbody.innerHTML = rows;
}

// 4. Fungsi ketika tombol Scan diklik
function startScan() {
    const resultsDiv = document.getElementById('scan-results');
    resultsDiv.innerHTML = `<div style="text-align:center; padding:20px; color:var(--gold-primary);">Scanning Liquidity Nodes...</div>`;
    
    setTimeout(() => {
        generatePairs();
        // Update harga setiap 3 detik agar terlihat hidup
        setInterval(updatePairData, 3000);
    }, 1500);
}

function executeTrade(coin) {
    alert("Executing Flashloan for " + coin + "... \nProfit sharing 70:30 initiated.");
}

// Fungsi ini dipanggil secara berkala atau saat halaman dimuat
function loadArbitrageData() {
    const tbody = document.getElementById('pair-body');
    if (!tbody) return;

    let rows = "";
    const mockExchanges = ["Uniswap", "Sushiswap", "PancakeSwap", "Curve", "Balancer"];

    for (let i = 1; i <= 100; i++) {
        const gap = (Math.random() * 0.8).toFixed(4);
        const profit = (Math.random() * 250).toFixed(2);
        
        rows += `
            <tr>
                <td>${i}</td>
                <td style="color:var(--gold-light)">ETH / USDT</td>
                <td>${mockExchanges[Math.floor(Math.random()*5)]}</td>
                <td>${mockExchanges[Math.floor(Math.random()*5)]}</td>
                <td>${gap} %</td>
                <td style="color:var(--neon-green)">$ ${profit}</td>
                <td><button class="btn-gold" style="padding:4px 12px; font-size:10px;">EXECUTE</button></td>
            </tr>
        `;
    }
    tbody.innerHTML = rows;
}

// Jalankan otomatis setiap kali user pindah ke halaman arbitrage
// Kita kaitkan dengan loadPage di dashboard.js
const originalLoadPage = loadPage;
loadPage = function(pageName) {
    originalLoadPage(pageName);
    if (pageName === 'arbitrage') {
        setTimeout(loadArbitrageData, 100);
        // Update data tiap 5 detik agar "Live"
        setInterval(loadArbitrageData, 5000);
    }
}

let currentProtocolFee = 0.09;

function updateFee(name, fee) {
    currentProtocolFee = fee;
    document.getElementById('display-fee').innerText = fee;
    
    // Update visual tombol aktif
    const btns = document.querySelectorAll('.proto-btn');
    btns.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.includes(name)) btn.classList.add('active');
    });
    
    calcTotalFee();
}

function calcTotalFee() {
    const loan = parseFloat(document.getElementById('loan-amount').value) || 0;
    
    // Hitung Fee Protokol
    const feePct = parseFloat(document.getElementById('display-fee').innerText);
    const estFee = (loan * (feePct / 100)).toFixed(2);
    
    // Update Report Kanan
    document.getElementById('rep-loan').innerText = loan.toLocaleString() + " USDT";
    
    // Simulasi Peluang Profit (Acak 1.5% - 4.0%)
    const profitPct = (1.5 + Math.random() * 2.5).toFixed(2);
    const grossProfit = (loan * (profitPct / 100)).toFixed(2);
    const netProfit = (grossProfit - estFee).toFixed(2);
    
    document.getElementById('rep-pct').innerText = profitPct + "%";
    document.getElementById('rep-gross').innerText = grossProfit + " USDT";
    document.getElementById('rep-net').innerText = netProfit + " USDT";
    
    // Split 70:30
    document.getElementById('rep-user').innerText = (netProfit * 0.7).toFixed(2) + " USDT";
    document.getElementById('rep-dev').innerText = (netProfit * 0.3).toFixed(2) + " USDT";
}

function transferCollateral() {
    const amount = document.getElementById('total-fee-val').innerText;
    if(amount <= 0) {
        alert("Please enter loan amount first!");
        return;
    }
    alert("Transferring " + amount + " USDT to Smart Contract Guarantee... \nStatus: PENDING");
    setTimeout(() => alert("Guarantee Balance Secured! Flashloan Ready."), 1500);
}