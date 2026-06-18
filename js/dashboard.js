/**
 * RELAXGO V2 - Dashboard Logic
 * Mengatur navigasi dan konten dinamis
 */

// 1. Data Konten Halaman
const pages = {
    overview: `
    <div class="page-container">
        <div class="portal-header">
            <i class="material-icons gold-icon">dashboard</i> 
            <span>DASHBOARD OVERVIEW</span>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <span class="stat-label">Total Portfolio</span>
                <span class="stat-value gold-text">$12,450.00</span>
                <span class="stat-change up">+12.5% Today</span>
            </div>
            <div class="stat-card">
                <span class="stat-label">Active Staking</span>
                <span class="stat-value">$8,200.00</span>
                <span class="stat-change">RLXG Tokens</span>
            </div>
            <div class="stat-card">
                <span class="stat-label">Arbitrage Profit</span>
                <span class="stat-value gold-text">$450.25</span>
                <span class="stat-change up">30:70 Ratio Active</span>
            </div>
        </div>

        <div class="section-title-small">ECOSYSTEM ACCESS</div>
        <div class="quick-access-grid">
            <div class="access-item" onclick="loadPage('arbitrage')">
                <i class="material-icons">bolt</i>
                <span>Flash Arbitrage</span>
            </div>
            <div class="access-item" onclick="loadPage('heatmap')">
                <i class="material-icons">map</i>
                <span>Service Heatmap</span>
            </div>
            <div class="access-item" onclick="loadPage('staking')">
                <i class="material-icons">layers</i>
                <span>Staking Pool</span>
            </div>
            <div class="access-item" onclick="loadPage('jobs')">
                <i class="material-icons">work</i>
                <span>Partner Jobs</span>
            </div>
            <div class="access-item" onclick="loadPage('roadmap')">
                <i class="material-icons">timeline</i>
                <span>Roadmap 2026</span>
            </div>
        </div>


        

<div class="slideshow-container">
<div class="slideshow-container" onmouseenter="clearInterval(slideTimer)" onmouseleave="startSlideTimer()">
    <div class="slideshow-inner" id="slideshow-inner">
        <div class="mySlides fade">
            <img src="https://i.ibb.co.com/pjLfGjMv/BANNER-STAKING.png" class="slide-img">
            <div class="slide-text">
                <h3>STAKING REWARDS 2026</h3>
                <p>Mulai Staking hari ini & dapatkan bonus tahunan hingga 15% APY.</p>
                <button class="btn-gold-outline small" onclick="loadPage('staking')">JOIN POOL</button>
            </div>
        </div>

        <div class="mySlides fade">
            <img src="https://i.ibb.co.com/YF4W4ZXR/MASSAGE-PREMIUM.png" class="slide-img">
            <div class="slide-text">
                <h3>PREMIUM MASSAGE SERVICES</h3>
                <p>Cek Heatmap untuk melihat terapis Platinum di area Anda.</p>
                <button class="btn-gold-outline small" onclick="loadPage('heatmap')">VIEW MAP</button>
            </div>
        </div>

        <div class="mySlides fade">
            <img src="https://i.ibb.co.com/TBNKX9qF/FLASHLOAN-ARB-1.png" class="slide-img">
            <div class="slide-text">
                <h3>FLASHLOAN ARBITRAGE Sharing Profit(30:70)</h3>
                <p>Flashloan adalah pinjaman kilat tanpa jaminan yang terjadi dalam 1 transaksi blockchain. Aman karena jika tidak untung, transaksi otomatis batal.</p>
                <button class="btn-gold-outline small" onclick="loadPage('arbitrage')">START TRADE</button>
            </div>
        </div>

        <div class="mySlides fade">
            <img src="https://i.ibb.co.com/fzj7W1C8/NEW-PARTNER-JOB.png" class="slide-img">
            <div class="slide-text">
                <h3>NEW PARTNER JOBS</h3>
                <p>Kesempatan karir untuk terapis & staff operasional baru.</p>
                <button class="btn-gold-outline small" onclick="loadPage('jobs')">SEE JOBS</button>
            </div>
        </div>

        <div class="mySlides fade">
            <img src="https://i.ibb.co.com/s9J38PX8/APP-LOUNCING.png" class="slide-img">
            <div class="slide-text">
                <h3>MOBILE APP LAUNCH</h3>
                <p>Dapatkan pengalaman RELAXGO di genggaman Anda (Segera Q4 2026).</p>
                <button class="btn-gold-outline small" onclick="loadPage('roadmap')">SEE ROADMAP</button>
            </div>
        </div>
    </div>

    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>

<div class="dots-container">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
    <span class="dot" onclick="currentSlide(4)"></span>
    <span class="dot" onclick="currentSlide(5)"></span>
</div>

        <div class="overview-split">
            <div class="activity-feed">
                <div class="section-title-small">LIVE NETWORK ACTIVITY</div>
                <div class="feed-item">
                    <i class="material-icons">person_add</i>
                    <span>New Partner joined from <b>Jakarta Pusat</b></span>
                </div>
                <div class="feed-item">
                    <i class="material-icons">account_balance_wallet</i>
                    <span>Staking Reward distributed: <b>150 RLXG</b></span>
                </div>
            </div>

            <div class="roadmap-preview">
                <div class="section-title-small">RELAXGO VISION</div>
                <div class="vision-card">
                    <h4>Next Milestone: Mobile App Launch</h4>
                    <div class="progress-bar-bg">
                        <div class="progress-bar-fill" style="width: 75%;"></div>
                    </div>
                    <p>75% Completed - Multi-level Affiliate System integration.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="jobs-overview-panel">
  <div class="jobs-header">
    <i class="fas fa-briefcase"></i>
    <h2 style="margin:0; font-size: 18px; letter-spacing: 2px;">OPPORTUNITIES & JOBS</h2>
  </div>

  <div class="jobs-grid">
    <div class="job-card-mini">
      <span class="job-badge badge-partner">PARTNER</span>
      <h3>City Agent</h3>
      <p>Menjadi representatif resmi RELAXGO di kota Anda. Mengelola jaringan terapis dan memastikan standar layanan terjaga.</p>
      <a href="link-ke-halaman-jobs.html" class="btn-read-more">Baca Selengkapnya <i class="fas fa-arrow-right" style="font-size: 10px;"></i></a>
    </div>

    <div class="job-card-mini">
      <span class="job-badge badge-expert">EXPERT</span>
      <h3>Master Trainer</h3>
      <p>Bertanggung jawab melakukan pelatihan, standarisasi teknik pijat, dan sertifikasi bagi calon terapis baru.</p>
      <a href="link-ke-halaman-jobs.html" class="btn-read-more">Baca Selengkapnya <i class="fas fa-arrow-right" style="font-size: 10px;"></i></a>
    </div>

    <div class="job-card-mini">
      <span class="job-badge badge-field">FIELD</span>
      <h3>Professional Therapist</h3>
      <p>Bergabung sebagai mitra lapangan di segala sub-bidang dengan sistem jam kerja fleksibel dan proteksi keamanan.</p>
      <a href="link-ke-halaman-jobs.html" class="btn-read-more">Baca Selengkapnya <i class="fas fa-arrow-right" style="font-size: 10px;"></i></a>
    </div>

    <div class="job-card-mini">
      <span class="job-badge badge-passive">PASSIVE INCOME</span>
      <h3>Affiliate Marketing</h3>
      <p>Bangun jaringan Anda. Dapatkan komisi berkelanjutan dari setiap transaksi yang dilakukan oleh referral Anda.</p>
      <a href="link-ke-halaman-jobs.html" class="btn-read-more">Baca Selengkapnya <i class="fas fa-arrow-right" style="font-size: 10px;"></i></a>
    </div>
  </div>
</div>


<div class="relaxgo-security-panel">
  <div class="security-header">
    <i class="fas fa-user-shield"></i>
    <h2>SECURITY PROTOCOL</h2>
  </div>

  <div class="security-grid">
    <div class="security-card">
      <div class="card-icon-title">
        <i class="fas fa-server"></i>
        <h3>Military-Grade</h3>
      </div>
      <p>Data investor dienkripsi dengan standar AES-256 pada level database.</p>
    </div>

    <div class="security-card">
      <div class="card-icon-title">
        <i class="fas fa-history"></i>
        <h3>Audit Trail</h3>
      </div>
      <p>Setiap log aktivitas user terekam secara immutable dan tidak dapat diubah.</p>
    </div>

    <div class="security-card">
      <div class="card-icon-title">
        <i class="fas fa-key"></i>
        <h3>Two-Factor Auth (2FA)</h3>
      </div>
      <p>Verifikasi tambahan via OTP untuk akses akun dan transaksi finansial.</p>
    </div>

    <div class="security-card">
      <div class="card-icon-title">
        <i class="fas fa-hand-holding-usd"></i>
        <h3>Withdrawal Lock</h3>
      </div>
      <p>Sistem penguncian penarikan dana ke rekening selain yang terdaftar.</p>
    </div>

    <div class="security-card">
      <div class="card-icon-title">
        <i class="fas fa-user-clock"></i>
        <h3>Secure Session</h3>
      </div>
      <p>Otomatis logout setelah 15 menit inaktivitas demi mencegah akses ilegal.</p>
    </div>

    <div class="security-card">
      <div class="card-icon-title">
        <i class="fas fa-shield-alt"></i>
        <h3>DDoS Protection</h3>
      </div>
      <p>Perlindungan infrastruktur website dari serangan traffic DDoS eksternal.</p>
    </div>
  </div>
</div>

  
<div class="faq-section" style="margin-top: 40px; padding: 20px; background: rgba(255,255,255,0.02); border-radius: 15px; border: 1px solid #222;">
    <h3 style="color: #FFD700; text-align: center; margin-bottom: 25px; letter-spacing: 1px;">YOUR QUESTIONS, ANSWERED</h3>
    
    <div class="faq-grid" style="display: grid; gap: 15px;">
        
        <div class="faq-item" style="border-bottom: 1px solid #333; padding-bottom: 10px;">
            <div onclick="toggleFaq(1)" style="cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-weight: 600; color: #fff; font-size: 14px;">1. Apa itu RELAXGO Arbitrage?</span>
                <i class="material-icons" id="icon-1" style="color: #FFD700;">expand_more</i>
            </div>
            <div id="ans-1" style="display: none; padding: 10px 0; color: #aaa; font-size: 13px; line-height: 1.6;">
                RELAXGO adalah ekosistem DeFi yang menggunakan Flashloan Aave V3 untuk melakukan arbitrase antar DEX secara otomatis tanpa menggunakan modal user sendiri.
            </div>
        </div>

        <div class="faq-item" style="border-bottom: 1px solid #333; padding-bottom: 10px;">
            <div onclick="toggleFaq(2)" style="cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-weight: 600; color: #fff; font-size: 14px;">2. Bagaimana sistem Profit Sharing 70:30 bekerja?</span>
                <i class="material-icons" id="icon-2" style="color: #FFD700;">expand_more</i>
            </div>
            <div id="ans-2" style="display: none; padding: 10px 0; color: #aaa; font-size: 13px; line-height: 1.6;">
                Setiap keuntungan bersih (net profit) dari eksekusi Flashloan akan dibagi otomatis: 70% masuk ke wallet Anda, dan 30% sebagai fee protokol untuk pengembangan sistem.
            </div>
        </div>

        <div class="faq-item" style="border-bottom: 1px solid #333; padding-bottom: 10px;">
            <div onclick="toggleFaq(3)" style="cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-weight: 600; color: #fff; font-size: 14px;">3. Mengapa saya harus melakukan Deposit Gas?</span>
                <i class="material-icons" id="icon-3" style="color: #FFD700;">expand_more</i>
            </div>
            <div id="ans-3" style="display: none; padding: 10px 0; color: #aaa; font-size: 13px; line-height: 1.6;">
                Meskipun pinjaman (loan) berasal dari Flashloan, eksekusi smart contract di blockchain membutuhkan biaya transaksi (Gas Fee) yang harus dibayar di muka.
            </div>
        </div>

        <div class="faq-item" style="border-bottom: 1px solid #333; padding-bottom: 10px;">
            <div onclick="toggleFaq(4)" style="cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-weight: 600; color: #fff; font-size: 14px;">4. Apakah dana saya aman di Smart Contract?</span>
                <i class="material-icons" id="icon-4" style="color: #FFD700;">expand_more</i>
            </div>
            <div id="ans-4" style="display: none; padding: 10px 0; color: #aaa; font-size: 13px; line-height: 1.6;">
                Ya. Smart contract RELAXGO telah diaudit dan bersifat non-custodial, artinya hanya wallet pemilik yang dapat menarik kembali dana deposit gas jika transaksi tidak dieksekusi.
            </div>
        </div>

        <div class="faq-item" style="border-bottom: 1px solid #333; padding-bottom: 10px;">
            <div onclick="toggleFaq(5)" style="cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-weight: 600; color: #fff; font-size: 14px;">5. Berapa lama waktu eksekusi Flashloan?</span>
                <i class="material-icons" id="icon-5" style="color: #FFD700;">expand_more</i>
            </div>
            <div id="ans-5" style="display: none; padding: 10px 0; color: #aaa; font-size: 13px; line-height: 1.6;">
                Eksekusi biasanya memakan waktu 15-45 detik tergantung pada kepadatan network (Ethereum, Arbitrum, atau Base) yang Anda pilih.
            </div>
        </div>

        <div class="faq-item" style="border-bottom: 1px solid #333; padding-bottom: 10px;">
            <div onclick="toggleFaq(6)" style="cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-weight: 600; color: #fff; font-size: 14px;">6. Apa itu Program Staking RGX?</span>
                <i class="material-icons" id="icon-6" style="color: #FFD700;">expand_more</i>
            </div>
            <div id="ans-6" style="display: none; padding: 10px 0; color: #aaa; font-size: 13px; line-height: 1.6;">
                Staking RGX memungkinkan investor awal mendapatkan passive income tambahan dan rating member yang lebih tinggi untuk akses ke fitur arbitrage VIP.
            </div>
        </div>

    </div>
</div>


<div class="newsletter-section" style="margin-top: 50px; padding: 40px; background: linear-gradient(135deg, rgba(255,215,0,0.05) 0%, rgba(0,0,0,0) 100%); border: 1px solid #333; border-radius: 20px; text-align: center; position: relative; overflow: hidden;">
    
    <div style="position: absolute; top: -50px; right: -50px; width: 150px; height: 150px; background: #FFD700; filter: blur(100px); opacity: 0.1;"></div>

    <i class="material-icons" style="font-size: 48px; color: #FFD700; margin-bottom: 15px;">mail_outline</i>
    
    <h2 style="margin: 0; font-size: 24px; letter-spacing: 1px; color: #fff;">STAY AHEAD OF THE MARKET</h2>
    <p style="color: #888; font-size: 14px; margin-top: 10px; margin-bottom: 30px;">
        Dapatkan update terbaru mengenai celah arbitrase, fitur staking baru, dan berita ekosistem RELAXGO langsung di email Anda.
    </p>

    <div style="max-width: 500px; margin: 0 auto; display: flex; gap: 10px; background: rgba(255,255,255,0.03); padding: 8px; border-radius: 12px; border: 1px solid #222;">
        <input type="email" id="news-email" placeholder="Enter your email address" 
            style="flex: 1; background: transparent; border: none; color: #fff; padding: 12px; outline: none; font-family: 'Inter', sans-serif;">
        
        <button onclick="subscribeNews()" style="background: #FFD700; color: #000; border: none; padding: 0 25px; border-radius: 8px; font-weight: 800; cursor: pointer; transition: 0.3s; white-space: nowrap;">
            SIGN UP
        </button>
    </div>

    <p style="font-size: 11px; color: #555; margin-top: 15px;">
        <i class="material-icons" style="font-size: 12px; vertical-align: middle;">security</i> 
        Kami menjaga privasi Anda. Berhenti berlangganan kapan saja.
    </p>
</div>

`,
arbitrage: `
<div class="arbitrage-container" style="display: block; height: auto; min-content: 100%; padding-bottom: 50px; overflow: visible; font-family: 'Inter', sans-serif; color: #fff;">
    
    <div class="portal-header" style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 10px; border-bottom: 1px solid #222;">
        <i class="material-icons" style="color: #FFD700;">vibration</i>
        <span style="font-weight: 800; letter-spacing: 2px; font-size: 14px;">FLASHLOAN ENGINE - AAVE V3 PROTOCOL GATEWAY</span>
    </div>

    <div class="top-control-grid" style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 20px;">
        
        <div class="control-left">
            <div class="protocol-selector" style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: 8px; border: 1px solid #222;">
                <p class="label-mini centered" style="font-size: 10px; color: #888; text-align: center; margin-bottom: 10px;">LENDING PROVIDER</p>
                <div class="protocol-row-single" style="margin-bottom: 10px;">
                    <div class="proto-btn active" style="cursor: default; width: 100%; justify-content: center; display: flex; align-items: center; gap: 12px; padding: 12px; background: rgba(255, 215, 0, 0.05); border: 1px solid #FFD700; border-radius: 6px;">
                        <img src="https://i.ibb.co.com/q3x5x9gK/AAVE-removebg-preview.png" 
                             style="width: 34px; height: 34px; object-fit: contain; filter: drop-shadow(0 0 5px rgba(255,255,255,0.2));"> 
                        <span style="font-weight: bold; letter-spacing: 1px; color: #fff;">Aave V3 Core</span>
                    </div>
                </div>

                <div class="fee-row centered" style="text-align: center; margin-top: 5px;">
                    <span class="fee-info" style="font-size: 11px;">Fixed Protocol Fee: <span id="display-fee" style="color: #FFD700; font-weight: bold;">0.09</span>%</span>
                </div>
                
                <p class="label-mini centered" style="font-size: 10px; color: #888; text-align: center; margin-top:15px; margin-bottom: 10px;">NETWORK SELECTION</p>
                <div class="network-selector-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
                    <button class="net-btn active" onclick="updateNetwork(this, 'Ethereum')" style="padding: 8px; font-size: 11px; cursor: pointer;">Ethereum</button>
                    <button class="net-btn" onclick="updateNetwork(this, 'Arbitrum')" style="padding: 8px; font-size: 11px; cursor: pointer;">Arbitrum</button>
                    <button class="net-btn" onclick="updateNetwork(this, 'Base')" style="padding: 8px; font-size: 11px; cursor: pointer;">Base</button>
                    <button class="net-btn" onclick="updateNetwork(this, 'Binance SC')" style="padding: 8px; font-size: 11px; cursor: pointer;">Binance SC</button>
                    <button class="net-btn" onclick="updateNetwork(this, 'Polygon')" style="padding: 8px; font-size: 11px; cursor: pointer;">Polygon</button>
                    <button class="net-btn" onclick="updateNetwork(this, 'Arbitrum Sepolia')" style="padding: 8px; font-size: 11px; cursor: pointer;">Arbitrum Sepolia Test</button>
                </div>
            </div> 

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
                <div class="setup-column" style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px; border: 1px solid #333;">
                    <label style="font-size: 11px; color: #888;">Loan Amount (USDT)</label>
                    <input type="number" id="loan-amount" placeholder="0.00" oninput="updateGasRequirement()" style="width:100%; background: #000; border: 1px solid #444; color: #fff; padding: 8px; border-radius: 4px; margin-top: 5px; box-sizing: border-box;">
                    
                    <div id="gas-estimate-container" style="margin-top: 10px; font-size: 0.7rem; color: #FFD700; background: rgba(255,215,0,0.05); padding: 8px; border-radius: 5px; border-left: 3px solid #FFD700;">
                        <i class="material-icons" style="font-size: 10px; vertical-align: middle;">bolt</i> 
                        Est. Cost: <span id="total-gas-cost" style="font-weight: bold;">0.00</span> USDT
                    </div>

                    <div style="margin-top:15px;">
                         <label style="font-size: 11px; color: #FFD700;">Deposit to Smart Contract</label>
                         <input type="number" id="deposit-amount" placeholder="0.00" style="background: rgba(255,215,0,0.05); border: 1px solid #FFD700; color: #fff; width:100%; padding:8px; border-radius:4px; margin-top:5px; box-sizing: border-box;">
                    </div>

                    <button class="btn-deposit" onclick="depositToContract()" style="width:100%; margin-top:15px; height: 40px; background: linear-gradient(180deg, #FFD700, #B8860B); border: none; border-radius: 4px; color: #000; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
                        <i class="material-icons" style="font-size: 18px;">account_balance_wallet</i> DEPOSIT
                    </button>
                </div>

                <div class="setup-column" style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px; border: 1px solid #333;">
                    <label style="font-size: 11px; color: #888;">Execution Priority</label>
                    <div class="gas-priority-selector" style="display: flex; gap: 4px; margin-top: 5px; margin-bottom: 15px;">
                        <button class="gas-btn active" style="flex:1; font-size: 10px; padding: 5px; cursor:pointer;" onclick="setGas(this, 1.2, 'Low')">Low</button>
                        <button class="gas-btn" style="flex:1; font-size: 10px; padding: 5px; cursor:pointer;" onclick="setGas(this, 1.8, 'Fast')">Fast</button>
                        <button class="gas-btn" style="flex:1; font-size: 10px; padding: 5px; cursor:pointer;" onclick="setGas(this, 2.5, 'Instant')">Instant</button>
                    </div>

                    <div id="selected-target-focus" style="margin-bottom: 12px; padding: 12px; background: rgba(0,255,127,0.03); border: 1px solid #00FF7F; border-radius: 6px; text-align: center;">
                        <div id="rep-pair" style="font-size: 14px; font-weight: bold; color: #fff;">-- / --</div>
                        <div id="rep-pct" style="font-size: 20px; font-weight: bold; color: #00FF7F; margin: 2px 0;">0.00%</div>
                        <span style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 1px;">Selected Net Gap</span>
                    </div>
                     
                    <button class="btn-execute-refined" onclick="executeFlashLoan()" id="btn-execute-main" style="width:100%; height: 45px; background: #FFD700; color: #000; border: none; border-radius: 4px; font-weight: 900; cursor: pointer; box-shadow: 0 4px 15px rgba(255,215,0,0.2);">
                        <i class="material-icons" style="font-size: 20px; vertical-align: middle;">flash_on</i> EXECUTE NOW
                    </button>
                </div>
            </div> 
        </div> 

        <div class="report-right">
            <div class="report-box" id="main-resizer-container" style="display: flex; flex-direction: column; height: 500px; background: #111; border: 1px solid #333; border-radius: 8px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                
                <div id="report-upper" style="padding: 20px; flex-shrink: 0; background: linear-gradient(180deg, #151515 0%, #111 100%);">
                    <h4 style="margin: 0 0 15px 0; font-size: 11px; color: #FFD700; letter-spacing: 1.5px; text-transform: uppercase; text-align: center; border-bottom: 1px solid #222; padding-bottom: 10px; font-weight: 800;">
                        FINAL EXECUTION REPORT SHARING PROFIT 70:30
                    </h4>
                    
                    <div id="calc-report" style="display: flex; flex-direction: column; gap: 10px;">
                        
                        <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(0, 255, 127, 0.05); padding: 12px; border-radius: 6px; border: 1px solid rgba(0, 255, 127, 0.15);">
                            <span style="color: #aaa; font-size: 12px; font-weight: 500;">Your Wallet Balance:</span>
                            <strong id="user-wallet-balance" style="color: #00FF7F; font-family: 'Consolas', monospace; font-size: 15px; text-shadow: 0 0 10px rgba(0, 255, 127, 0.3);">1.85 ETH</strong>
                        </div>

                        <div style="display: flex; flex-direction: column; gap: 6px; padding: 0 5px;">
                            <div style="display: flex; justify-content: space-between; font-size: 12px;">
                                <span style="color: #666;">Smart Contract:</span>
                                <strong id="contract-balance" style="color: #FFD700; font-family: 'Consolas';">0.00 USDT</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between; font-size: 12px;">
                                <span style="color: #666;">Gas Deposit:</span>
                                <strong id="required-deposit" style="color: #FFD700; font-family: 'Consolas';">0.00</strong>
                            </div>
                        </div>

                        <div style="margin: 10px 0; border-top: 1px dashed #333;"></div>

                        <div style="text-align: center; padding: 10px 0; background: rgba(255, 215, 0, 0.02); border-radius: 8px;">
                            <span style="font-size: 10px; color: #888; display: block; margin-bottom: 2px; letter-spacing: 1px;">TOTAL NET PROFIT</span>
                            <strong id="rep-net" style="color: #FFD700; font-size: 32px; font-family: 'Consolas', monospace; text-shadow: 0 0 20px rgba(255, 215, 0, 0.4);">0.00</strong>
                        </div>

                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 5px;">
                            <div style="background: rgba(0, 255, 127, 0.03); padding: 10px; border-radius: 6px; border: 1px solid rgba(0, 255, 127, 0.05); text-align: center;">
                                <span style="font-size: 9px; color: #00FF7F; display: block; margin-bottom: 3px; opacity: 0.7;">YOUR SHARE (70%)</span>
                                <strong id="rep-user-share" style="color: #fff; font-size: 16px; font-family: 'Consolas';">0.00</strong>
                            </div>
                            <div style="background: rgba(255, 255, 255, 0.03); padding: 10px; border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.05); text-align: center;">
                                <span style="font-size: 9px; color: #888; display: block; margin-bottom: 3px;">OWNER (30%)</span>
                                <strong id="rep-owner-share" style="color: #888; font-size: 16px; font-family: 'Consolas';">0.00</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="dragbar" style="height: 6px; cursor: ns-resize; background: #222; border-top: 1px solid #333; border-bottom: 1px solid #000; display: flex; justify-content: center; align-items: center;">
                    <div style="width: 35px; height: 2px; background: #555; border-radius: 2px;"></div>
                </div>

                <div id="report-console" style="flex-grow: 1; background: #050505; padding: 15px; font-family: 'Consolas', monospace; font-size: 11px; overflow-y: auto;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; border-bottom: 1px solid #111; padding-bottom: 5px;">
                        <span style="color: #444; font-size: 9px; letter-spacing: 1px;">TERMINAL v1.0.4</span>
                        <span style="color: #00FF7F; font-size: 8px; display: flex; align-items: center; gap: 4px;">
                            <span style="width: 6px; height: 6px; background: #00FF7F; border-radius: 50%; display: inline-block; box-shadow: 0 0 5px #00FF7F;"></span>
                            SYSTEM ONLINE
                        </span>
                    </div>
                    <div id="terminal-output" style="color: #00FF7F; line-height: 1.5; opacity: 0.9;">
                        <div>> [SYSTEM] Awaiting pair selection...</div>
                    </div>
                </div>
            </div>
        </div>
    </div> 

    <div class="full-width-table" style="margin-top: 30px;">
         <p class="label-mini" style="margin-bottom: 15px; color: #FFD700; font-size: 12px; letter-spacing: 1px;">
            🔍 LIVE MARKET SCANNER (FIXED DEX A/B) EST-LOAN 1000 USDT
         </p>
         <div class="scanner-wrapper" style="background: rgba(0,0,0,0.2); border-radius: 8px; border: 1px solid #222; overflow: hidden;">
            <table class="table table-dark table-hover mb-0" style="font-size: 0.85rem; width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="color: #FFD700; text-transform: uppercase; border-bottom: 2px solid #FFD700; background: #111; text-align: left;">
                        <th style="padding: 15px; width: 50px;">NO</th>
                        <th style="padding: 15px;">ASSET</th> 
                        <th style="padding: 15px;">PRICE (DEX A)</th>
                        <th style="padding: 15px;">PRICE (DEX B)</th>
                        <th style="padding: 15px;">GAP (%)</th>
                        <th style="padding: 15px;">EST. PROFIT</th> 
                        <th style="padding: 15px; text-align: center; width: 150px;">ACTION</th> 
                    </tr>
                </thead>
                <tbody id="scanner-body">
                    </tbody>
            </table>
        </div>
    </div>
</div>
`,
    heatmap: `
    <div class="page-container">
        <div class="portal-header">
            <i class="material-icons gold-icon">public</i> 
            <span>LIVE THERAPIST DENSITY - INDONESIA</span>
        </div>

        <div class="map-wrapper">
            <div class="map-stats-overlay">
                <div class="m-stat">
                    <span class="m-label">Active Cities</span>
                    <span class="m-value">34</span>
                </div>
                <div class="m-stat">
                    <span class="m-label">Online Therapists</span>
                    <span class="m-value gold-text">1,240</span>
                </div>
            </div>

            <div class="indonesia-map" id="map-container">
                <div class="map-dot jakarta" data-city="Jakarta"></div>
                <div class="map-dot surabaya" data-city="Surabaya"></div>
                <div class="map-dot medan" data-city="Medan"></div>
                <div class="map-dot makassar" data-city="Makassar"></div>
                <div class="map-dot bali" data-city="Bali"></div>
                <div class="map-dot bandung" data-city="Bandung"></div>
                <div class="map-dot balikpapan" data-city="Balikpapan"></div>
                
                <img src="https://i.ibb.co.com/DfGDL92q/MAP-INDONESIA.jpg" id="indo-map-img" class="svg-map" alt="INDONESIA MAP">
            </div>

            <div class="map-legend">
                <span class="legend-item"><span class="dot-gold"></span> High Density</span>
                <span class="legend-item"><span class="dot-blue"></span> Emerging Market</span>
            </div>
        </div>
    </div>
`,

    network: `
        <div style="text-align:center; padding: 20px;">
            <i class="material-icons" style="font-size: 40px; color: var(--security-blue);">language</i>
            <h2 style="color: var(--gold-primary);">Global Network Status</h2>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top:20px;">
                <div class="stat-card"><h4>Nodes Active</h4><p style="color:var(--neon-green);">1,240</p></div>
                <div class="stat-card"><h4>Sync Speed</h4><p style="color:var(--neon-green);">12ms</p></div>
            </div>
            <p style="color: #888; margin-top:15px;">All global nodes are currently synchronized.</p>
        </div>
    `,
  staking: `
    <div class="page-container">
        <div class="portal-header">
            <i class="material-icons gold-icon">account_balance</i> 
            <span>RELAXGO STAKING PROTOCOL</span>
        </div>

        <div class="staking-stats-grid">
            <div class="staking-stat-card">
                <span class="stat-label">Total Value Locked (TVL)</span>
                <span class="stat-value">$2,450,120.00</span>
                <span class="stat-trend"><i class="material-icons">trending_up</i> +12% this month</span>
            </div>
            <div class="staking-stat-card">
                <span class="stat-label">Total Rewards Distributed</span>
                <span class="stat-value gold-text">145,200 RLXG</span>
                <span class="stat-trend">Real Yield Model</span>
            </div>
            <div class="staking-stat-card">
                <span class="stat-label">Your Active Stake</span>
                <span class="stat-value">0.00 RLXG</span>
                <button class="btn-gold-outline" style="margin-top:10px; width:100%;">Claim Rewards</button>
            </div>
        </div>

        <div class="calculator-container">
            <div class="calc-header">
                <i class="material-icons gold-text">calculate</i>
                <h4 style="margin:0; color:#fff;">PROFIT ESTIMATOR</h4>
            </div>
            <div class="calc-body">
                <div class="calc-input-group">
                    <label>Amount to Stake (USDT)</label>
                    <input type="number" id="stake-amount" placeholder="e.g. 1000" oninput="calculateProfit()">
                </div>
                <div class="calc-input-group">
                    <label>Select Duration</label>
                    <select id="stake-duration" onchange="calculateProfit()">
                        <option value="0.005">Flexible (0.5% / Mo)</option>
                        <option value="0.012">3 Months (1.2% / Mo)</option>
                        <option value="0.018">6 Months (1.8% / Mo)</option>
                        <option value="0.025">12 Months (2.5% / Mo)</option>
                    </select>
                </div>
                <div class="calc-result">
                    <div class="result-item">
                        <span>Monthly Profit:</span>
                        <span id="monthly-profit" class="gold-text">$0.00</span>
                    </div>
                    <div class="result-item">
                        <span style="font-weight:bold;">Total Return:</span>
                        <span id="total-return" class="white-text">$0.00</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="staking-options-container">
            <div class="section-title-small" style="margin-bottom:20px;">SELECT STAKING DURATION</div>
            <div class="staking-grid">
                
                <div class="tier-card">
                    <div class="tier-header">FLEXIBLE</div>
                    <div class="tier-yield">0.5% <small>/Month</small></div>
                    <ul class="tier-features">
                        <li><i class="material-icons">check</i> No Lock-up period</li>
                        <li><i class="material-icons">check</i> Withdraw anytime</li>
                    </ul>
                    <button class="btn-blue-metallic" style="width:100%" onclick="openStakeModal('Flexible')">STAKE NOW</button>
                </div>

                <div class="tier-card">
                    <div class="tier-header">3 MONTHS</div>
                    <div class="tier-yield">1.2% <small>/Month</small></div>
                    <ul class="tier-features">
                        <li><i class="material-icons">check</i> 90 Days Lock-up</li>
                        <li><i class="material-icons">check</i> Optimized Yield</li>
                    </ul>
                    <button class="btn-blue-metallic" style="width:100%" onclick="openStakeModal('3 Months')">STAKE NOW</button>
                </div>

                <div class="tier-card featured-tier">
                    <div class="tier-badge">MOST POPULAR</div>
                    <div class="tier-header">6 MONTHS</div>
                    <div class="tier-yield">1.8% <small>/Month</small></div>
                    <ul class="tier-features">
                        <li><i class="material-icons">stars</i> <b>Priority Pass</b></li>
                        <li><i class="material-icons">check</i> 180 Days Lock-up</li>
                    </ul>
                    <button class="btn-gold" style="width:100%" onclick="openStakeModal('6 Months')">STAKE NOW</button>
                </div>

                <div class="tier-card gold-border">
                    <div class="tier-header">12 MONTHS</div>
                    <div class="tier-yield">2.5% <small>/Month</small></div>
                    <ul class="tier-features">
                        <li><i class="material-icons">verified_user</i> <b>VVIP Access</b></li>
                        <li><i class="material-icons">check</i> 365 Days Lock-up</li>
                    </ul>
                    <button class="btn-gold" style="width:100%" onclick="openStakeModal('12 Months')">STAKE NOW</button>
                </div>

            </div>
        </div>
    </div>
`,
    swap: `
    <div class="page-container" style="max-width: 500px; margin: 0 auto;">
        <div class="portal-header" style="justify-content: center;">
            <i class="material-icons gold-icon">swap_calls</i> 
            <span>INSTANT SWAP</span>
        </div>

        <div class="swap-box">
            <div class="swap-input-group">
                <div class="swap-label">You Pay</div>
                <div class="swap-field">
                    <input type="number" placeholder="0.0" class="swap-input">
                    <div class="token-selector">
                        <img src="https://cryptologos.cc/logos/tether-usdt-logo.png" width="20">
                        <span>USDT</span>
                    </div>
                </div>
            </div>

            <div class="swap-divider">
                <div class="swap-icon-circle">
                    <i class="material-icons">south</i>
                </div>
            </div>

            <div class="swap-input-group">
                <div class="swap-label">You Receive</div>
                <div class="swap-field">
                    <input type="number" placeholder="0.0" class="swap-input" readonly>
                    <div class="token-selector">
                        <img src="images/relaxgo-logo.png" width="20">
                        <span>RLXG</span>
                    </div>
                </div>
            </div>

            <div class="swap-details">
                <div class="detail-row">
                    <span>Exchange Rate</span>
                    <span>1 USDT = 12.5 RLXG</span>
                </div>
                <div class="detail-row">
                    <span>Slippage Tolerance</span>
                    <span class="gold-text">0.5%</span>
                </div>
            </div>

            <button class="btn-gold" style="width: 100%; height: 50px; font-size: 16px; margin-top: 20px;">
                CONFIRM SWAP
            </button>
        </div>
    </div>
`,
   roadmap: `
    <div class="page-container">
        <div class="portal-header">
            <i class="material-icons gold-icon">map</i> 
            <span>STRATEGIC ROADMAP 2026 - 2027</span>
        </div>

        <div class="roadmap-container">
            <div class="roadmap-item active">
                <div class="roadmap-dot"></div>
                <div class="roadmap-content">
                    <span class="roadmap-date">Q1 2026 (MAR - APR)</span>
                    <h3>PHASE 1: GENESIS LAUNCH</h3>
                    <ul>
                        <li><i class="material-icons">check_circle</i> Launching Portal V2 UI/UX</li>
                        <li><i class="material-icons">check_circle</i> Arbitrage Engine Core Integration</li>
                        <li><i class="material-icons">radio_button_unchecked</i> Integration of Login & Global Search</li>
                    </ul>
                </div>
            </div>

            <div class="roadmap-item">
                <div class="roadmap-dot"></div>
                <div class="roadmap-content">
                    <span class="roadmap-date">Q2 2026 (MAY - JUL)</span>
                    <h3>PHASE 2: THERAPIST NETWORK</h3>
                    <ul>
                        <li><i class="material-icons">radio_button_unchecked</i> Launching Job Vacancy Portal</li>
                        <li><i class="material-icons">radio_button_unchecked</i> Live Heatmap Expansion (Top 10 Cities)</li>
                        <li><i class="material-icons">radio_button_unchecked</i> Therapist Mobile App Beta Test</li>
                    </ul>
                </div>
            </div>

            <div class="roadmap-item">
                <div class="roadmap-dot"></div>
                <div class="roadmap-content">
                    <span class="roadmap-date">Q3 2026 (AUG - OCT)</span>
                    <h3>PHASE 3: SWAP & LIQUIDITY</h3>
                    <ul>
                        <li><i class="material-icons">radio_button_unchecked</i> Deployment of RELAXGO Swap Engine</li>
                        <li><i class="material-icons">radio_button_unchecked</i> Revenue Share Staking Protocol</li>
                        <li><i class="material-icons">radio_button_unchecked</i> Strategic Partnership with Luxury Spas</li>
                    </ul>
                </div>
            </div>

            <div class="roadmap-item">
                <div class="roadmap-dot"></div>
                <div class="roadmap-content">
                    <span class="roadmap-date">Q4 2026 - Q1 2027</span>
                    <h3>PHASE 4: GLOBAL SCALE</h3>
                    <ul>
                        <li><i class="material-icons">radio_button_unchecked</i> AI-Driven Demand Forecasting</li>
                        <li><i class="material-icons">radio_button_unchecked</i> International Franchise Model</li>
                        <li><i class="material-icons">radio_button_unchecked</i> RELAXGO Governance (DAO) Launch</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
 `,
  jobs: `
    <div class="page-container">
        <div class="portal-header">
            <i class="material-icons gold-icon">work</i> 
            <span>CAREER & PARTNERSHIP OPPORTUNITIES</span>
        </div>

        <div class="jobs-grid-2x2">
            
            <div class="job-card premium-border">
                <div class="job-badge">PARTNER</div>
                <h3>City Agent (Seluruh Indonesia)</h3>
                <p class="job-desc">Menjadi representatif resmi RELAXGO di kota Anda. Mengelola jaringan terapis dan memastikan standar layanan terjaga.</p>
                <div class="job-benefits">
                    <div class="benefit-item">
                        <i class="material-icons">payments</i>
                        <span><strong>5% Profit Sharing</strong> dari total transaksi (Nett)</span>
                    </div>
                    <div class="benefit-item">
                        <i class="material-icons">public</i>
                        <span>Kuasai wilayah operasional kota Anda</span>
                    </div>
                </div>
                <button class="btn-blue-metallic" style="width:100%" onclick="window.setRoleAndGo('Agen')">DAFTAR AGEN</button>
            </div>

            <div class="job-card">
                <div class="job-badge">EXPERT</div>
                <h3>Master Trainer (Guru Terapis)</h3>
                <p class="job-desc">Bertanggung jawab melakukan pelatihan, standarisasi teknik pijat, dan sertifikasi bagi calon terapis baru.</p>
                <div class="job-info-list">
                    <span><i class="material-icons">done</i> Deep Tissue Expert</span>
                    <span><i class="material-icons">done</i> Reflexology Specialist</span>
                </div>
                <button class="btn-gold" style="width:100%; margin-top:20px;" onclick="window.setRoleAndGo('Pengajar')">DAFTAR PENGAJAR</button>
            </div>

            <div class="job-card">
                <div class="job-badge">FIELD</div>
                <h3>Professional Therapist</h3>
                <p class="job-desc">Bergabung sebagai mitra lapangan di segala sub-bidang dengan sistem jam kerja fleksibel.</p>
                <div class="job-info-list">
                    <span><i class="material-icons">schedule</i> Atur waktu kerja sendiri</span>
                    <span><i class="material-icons">security</i> Proteksi keamanan terapis</span>
                </div>
                <button class="btn-blue-metallic" style="width:100%; margin-top:20px;" onclick="window.setRoleAndGo('Terapis')">GABUNG TERAPIS</button>
            </div>

            <div class="job-card affiliate-card">
                <div class="job-badge badge-emerald">PASSIVE INCOME</div>
                <h3>Affiliate Marketing</h3>
                <p class="job-desc">Bangun jaringan Anda. Dapatkan komisi berkelanjutan dari setiap transaksi yang dilakukan oleh referal Anda.</p>
                <div class="job-benefits">
                    <div class="benefit-item emerald-text">
                        <i class="material-icons">account_tree</i>
                        <span><strong>Multi-Level Referral</strong> System</span>
                    </div>
                    <div class="benefit-item emerald-text">
                        <i class="material-icons">account_balance_wallet</i>
                        <span>Withdraw komisi kapan saja (1x/hari)</span>
                    </div>
                </div>
                <button class="btn-emerald" style="width:100%; margin-top:20px;" onclick="window.setRoleAndGo('Affiliate')">START EARNING</button>
            </div>

        </div>
    </div>
`,
   deposit: `
    <div class="page-container">
        <div class="portal-header">
            <i class="material-icons gold-icon">account_balance_wallet</i> 
            <span>WALLET & DEPOSIT CENTER</span>
        </div>

        <div class="wallet-overview-card">
            <div class="wallet-info">
                <span class="wallet-label">Your Total Balance</span>
                <span class="wallet-amount gold-text">$2,540.50</span>
                <span class="wallet-address">Wallet ID: RLXG-9982...X71</span>
            </div>
           
          <div class="wallet-actions">
          <button class="btn-gold small full-width-mobile" onclick="loadPage('withdraw')">
           <i class="material-icons" style="font-size: 18px; vertical-align: middle; margin-right: 5px;">payments</i>
           WITHDRAW NOW
        </button>
     </div>
        </div>

        <div class="section-title-small">CHOOSE DEPOSIT METHOD</div>
        <div class="deposit-grid">
            <div class="deposit-card" onclick="selectDeposit('crypto')">
                <div class="dep-icon-wrapper"><i class="material-icons">currency_bitcoin</i></div>
                <div class="dep-info">
                    <h4>Crypto Transfer</h4>
                    <p>USDT (BEP20 / TRC20)</p>
                </div>
                <i class="material-icons arrow">chevron_right</i>
            </div>

            <div class="deposit-card" onclick="selectDeposit('bank')">
                <div class="dep-icon-wrapper"><i class="material-icons">account_balance</i></div>
                <div class="dep-info">
                    <h4>Bank Transfer</h4>
                    <p>IDR Virtual Account</p>
                </div>
                <i class="material-icons arrow">chevron_right</i>
            </div>

            <div class="deposit-card" onclick="selectDeposit('paypal')">
                <div class="dep-icon-wrapper"><i class="material-icons">payments</i></div>
                <div class="dep-info">
                    <h4>PayPal / Cards</h4>
                    <p>USD Credit & Debit Cards</p>
                </div>
                <i class="material-icons arrow">chevron_right</i>
            </div>
        </div>

        <div id="deposit-form-container" class="deposit-form-box" style="display:none;"></div>

        <div class="section-title-small" style="margin-top: 50px;">RECENT TRANSACTIONS</div>
        <div class="history-card">
            <table class="history-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Method</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody id="transaction-history-body">
                    <tr>
                        <td>#RXG-8812</td>
                        <td><i class="material-icons tiny-icon">currency_bitcoin</i> Crypto</td>
                        <td>+500.00 USDT</td>
                        <td>24 Mar 2026</td>
                        <td><span class="status-badge success">Success</span></td>
                    </tr>
                    <tr>
                        <td>#RXG-8825</td>
                        <td><i class="material-icons tiny-icon">account_balance</i> Bank Transfer</td>
                        <td>+1,250,000 IDR</td>
                        <td>24 Mar 2026</td>
                        <td><span class="status-badge pending">Pending</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
`,
withdraw: `
    <div class="page-container">
        <div class="portal-header">
            <i class="material-icons gold-icon">payments</i> 
            <span>WITHDRAWAL CENTER</span>
        </div>

        <div class="info-banner">
            <i class="material-icons">info</i>
            <span>Batas penarikan: <b>1 kali per hari</b>. Pastikan data rekening Anda sudah benar.</span>
        </div>

        <div class="withdraw-grid">
            <div class="withdraw-card main-form">
                <div class="section-title-small">REQUEST WITHDRAWAL</div>
                
                <div class="input-group-gold">
                    <label>Select Method</label>
                    <select id="withdraw-method" class="gold-input-select">
                        <option value="bank">Local Bank Transfer (IDR)</option>
                        <option value="usdt">Crypto USDT (BEP20)</option>
                    </select>
                </div>

                <div class="input-group-gold">
                    <label>Amount to Withdraw</label>
                    <div class="amount-input-wrapper">
                        <span class="currency-prefix">$</span>
                        <input type="number" id="withdraw-amount" placeholder="Min. 10.00" class="gold-input">
                    </div>
                    <small class="balance-helper">Available Balance: <b>$2,540.50</b></small>
                </div>

                <div class="input-group-gold">
                    <label>Destination Account / Wallet Address</label>
                    <textarea id="withdraw-dest" placeholder="Contoh: BCA 8830xxxx atau Wallet Address 0x..." class="gold-input-text"></textarea>
                </div>

                <button class="btn-gold large full-width" onclick="processWithdraw()">SUBMIT WITHDRAWAL</button>
            </div>

            <div class="withdraw-card summary">
                <div class="section-title-small">SUMMARY</div>
                <div class="summary-item">
                    <span>Fee (3%)</span>
                    <span id="wd-fee">$0.00</span>
                </div>
                <div class="summary-item total">
                    <span>You will receive</span>
                    <span id="wd-total" class="gold-text">$0.00</span>
                </div>
                <hr class="gold-hr">
                <div class="rating-info">
                    <i class="material-icons">stars</i>
                    <p>Rating Anda saat ini: <b>5.0 (Platinum)</b><br>
                    <small>Sistem Rating & Reward mempengaruhi prioritas antrean penarikan.</small></p>
                </div>
            </div>
        </div>
    </div>
`,
  
withdraw: `
        <div class="page-container">
            <div class="portal-header">
                <div onclick="loadPage('deposit')" style="cursor:pointer; display:flex; align-items:center; gap:10px;">
                    <i class="material-icons gold-icon">arrow_back</i>
                    <span>BACK TO WALLET</span>
                </div>
            </div>

            <div class="withdraw-grid" style="margin-top:20px;">
                <div class="withdraw-card main-form">
                    <div class="section-title-small">REQUEST WITHDRAWAL</div>
                    <p style="font-size:12px; color:#888;">Batas penarikan: 1 kali per hari.</p>
                    
                    <div class="input-group-gold" style="margin-top:20px;">
                        <label>Select Method</label>
                        <select id="withdraw-method" class="gold-input-select">
                            <option value="bank">BCA / Local Bank (IDR)</option>
                            <option value="usdt">Crypto USDT (BEP20)</option>
                        </select>
                    </div>

                    <div class="input-group-gold" style="margin-top:15px;">
                        <label>Amount (USD)</label>
                        <input type="number" id="withdraw-amount" placeholder="Min. $10" class="gold-input" style="width:100%; padding:12px; background:#111; border:1px solid #444; color:white; border-radius:8px;">
                    </div>

                    <div class="input-group-gold" style="margin-top:15px;">
                        <label>Destination Account</label>
                        <textarea id="withdraw-dest" placeholder="Nomor Rekening atau Wallet Address" class="gold-input-text" style="height:80px;"></textarea>
                    </div>

                    <button class="btn-gold large full-width" style="margin-top:20px;" onclick="processWithdraw()">SUBMIT WITHDRAWAL</button>
                </div>

                <div class="withdraw-card summary">
                    <div class="section-title-small">RATING & REWARDS</div>
                    <div class="rating-info" style="background:rgba(184,134,11,0.05); padding:15px; border-radius:10px; border:1px solid rgba(184,134,11,0.2);">
                        <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
                            <i class="material-icons" style="color:var(--gold-primary);">stars</i>
                            <span style="font-weight:bold; color:white;">5.0 PLATINUM</span>
                        </div>
                        <p style="font-size:11px; line-height:1.5;">Anda mendapatkan prioritas penarikan cepat dan potongan biaya admin sebesar 50% karena rating tinggi.</p>
                    </div>
                </div>
            </div>
        </div>

    `,
    profile: `
<div class="profile-wrapper">
  
  <div class="profile-header">
    <div class="avatar-container">
      <img src="https://via.placeholder.com/100" alt="Profile">
    </div>
    <div class="user-meta">
      <h2>Sri Hartono</h2>
      <p>ID Member: RG-20260411</p>
      <div style="margin-top: 10px; display: inline-block; background: #043927; color: #2ecc71; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: bold;">VERIFIED</div>
    </div>
  </div>

  <div class="affiliate-box">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <h3 style="margin:0; font-size: 16px;"><i class="fas fa-share-alt"></i> Affiliate Hub</h3>
      <span style="color: var(--p-gold); font-weight: bold;">Saldo: Rp 2.500.000</span>
    </div>
    <div class="link-group">
      <input type="text" value="https://relaxgo.com/ref/srihartono" readonly>
      <button style="background: var(--p-gold); border: none; padding: 0 15px; border-radius: 5px; cursor: pointer;">Salin</button>
    </div>
  </div>

  <h3 style="margin-bottom: 20px; font-size: 18px; border-bottom: 1px solid var(--p-border); padding-bottom: 10px;">Aktivasi Fitur & Peran</h3>
  
  <div class="activation-grid">
    
    <div class="activate-card">
      <div>
        <h3>Investment / Staking</h3>
        <p>Aktifkan untuk mulai menanam modal dan mendapatkan bagi hasil harian.</p>
      </div>
      <label class="switch">
        <input type="checkbox" checked>
        <span class="slider"></span>
      </label>
    </div>

    <div class="activate-card">
  <div>
    <h3>Therapist / Trainer</h3>
    <p>Daftar sebagai penyedia jasa profesional atau pengajar bersertifikat.</p>
  </div>
  <label class="switch" style="cursor: pointer;">
    <input type="checkbox" id="toggle-partner">
    <span class="slider"></span>
  </label>
</div>

    <div class="activate-card">
      <div>
        <h3>City / Prov Agent</h3>
        <p>Otoritas pengelolaan wilayah, manajemen terapis, dan bagi hasil regional.</p>
      </div>
      <label class="switch">
        <input type="checkbox">
        <span class="slider"></span>
      </label>
    </div>

  </div>

  <div class="wallet-summary">
    <div>
      <span style="display: block; font-size: 11px; color: #888;">E-Wallet Utama</span>
      <span style="font-weight: bold; color: var(--p-green);">Rp 15.750.000</span>
    </div>
    <div>
      <span style="display: block; font-size: 11px; color: #888;">Poin Reward</span>
      <span style="font-weight: bold; color: var(--p-gold);">450 pts</span>
    </div>
    <button style="background: transparent; border: 1px solid var(--p-gold); color: var(--p-gold); border-radius: 5px; padding: 5px 15px; font-size: 12px; cursor: pointer;">Tarik Dana</button>
  </div>

</div>
`,
    TherapistTrainer : `
<div class="reg-container">
  <div class="reg-card">
    <div class="reg-header">
      <h2>Pendaftaran Partner Profesional</h2>
      <p style="font-size: 12px; color: #888; margin-top: 5px;">Lengkapi data di bawah untuk verifikasi keahlian Anda.</p>
    </div>

    <form>
      <div class="form-group">
        <label>Pilihan Profesi</label>
        <select class="form-control">
          <option value="">-- Pilih Peran --</option>
          <option value="trainer">Master Trainer</option>
          <option value="therapist">Professional Therapist</option>
        </select>
      </div>

      <div class="form-group">
        <label>Nama Lengkap (Sesuai Identitas)</label>
        <input type="text" class="form-control" placeholder="Masukkan nama lengkap...">
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
        <div class="form-group">
          <label>Provinsi</label>
          <select class="form-control">
            <option value="">Pilih Provinsi</option>
            </select>
        </div>
        <div class="form-group">
          <label>Kota/Kabupaten</label>
          <select class="form-control">
            <option value="">Pilih Kota</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label>Alamat Domisili Sekarang</label>
        <textarea class="form-control" rows="3" placeholder="Nama jalan, nomor rumah, RT/RW..."></textarea>
      </div>

      <label style="display: block; font-size: 13px; color: var(--reg-gold); margin-bottom: 15px; font-weight: bold;">Dokumen Pendukung (Upload)</label>
      
      <div class="upload-grid">
        <label class="upload-box">
          <i class="fas fa-id-card"></i>
          <span>KTP (Identitas)</span>
          <input type="file">
        </label>
        <label class="upload-box">
          <i class="fas fa-camera"></i>
          <span>Foto Profil</span>
          <input type="file">
        </label>
        <label class="upload-box">
          <i class="fas fa-file-invoice-dollar"></i>
          <span>NPWP</span>
          <input type="file">
        </label>
        <label class="upload-box">
          <i class="fas fa-graduation-cap"></i>
          <span>Ijazah Terakhir</span>
          <input type="file">
        </label>
        <label class="upload-box" style="grid-column: span 2;">
          <i class="fas fa-shield-alt"></i>
          <span>SKCK (Dokumen Keamanan)</span>
          <input type="file">
        </label>
      </div>

      <button type="submit" class="btn-submit">KIRIM PENDAFTARAN</button>
    </form>
  </div>
</div>
 `,
    Marketplace: `
<div class="marketplace-container">
  <div class="market-header">
    <h1>RELAXGO MARKETPLACE</h1>
    <p style="color: var(--text-muted); font-size: 14px;">Eksklusif Produk untuk Mitra & Investor</p>
  </div>

  <div class="product-grid">
    
    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=300" class="product-image" alt="Oil">
      <div class="product-info">
        <span class="product-category">Essentials</span>
        <div class="product-title">Premium Lavender Essential Oil</div>
        <p class="product-price">Rp 125.000</p>
        <button class="btn-buy">Beli Sekarang</button>
      </div>
    </div>

    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=300" class="product-image" alt="Shirt">
      <div class="product-info">
        <span class="product-category">Merchandise</span>
        <div class="product-title">Official RELAXGO Polo Shirt</div>
        <p class="product-price">Rp 185.000</p>
        <button class="btn-buy">Beli Sekarang</button>
      </div>
    </div>

    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1544161515-4af6b1d462c2?auto=format&fit=crop&w=300" class="product-image" alt="Chair">
      <div class="product-info">
        <span class="product-category">Equipment</span>
        <div class="product-title">Portable Massage Table Pro</div>
        <p class="product-price">Rp 2.450.000</p>
        <button class="btn-buy">Beli Sekarang</button>
      </div>
    </div>

    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=300" class="product-image" alt="Candle">
      <div class="product-info">
        <span class="product-category">Essentials</span>
        <div class="product-title">Therapeutic Scented Candle</div>
        <p class="product-price">Rp 95.000</p>
        <button class="btn-buy">Beli Sekarang</button>
      </div>
    </div>

    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=300" class="product-image" alt="Stone">
      <div class="product-info">
        <span class="product-category">Equipment</span>
        <div class="product-title">Basalt Hot Stone Set (12pcs)</div>
        <p class="product-price">Rp 450.000</p>
        <button class="btn-buy">Beli Sekarang</button>
      </div>
    </div>

    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=300" class="product-image" alt="Towel">
      <div class="product-info">
        <span class="product-category">Merchandise</span>
        <div class="product-title">Microfiber Luxury Towel Set</div>
        <p class="product-price">Rp 210.000</p>
        <button class="btn-buy">Beli Sekarang</button>
      </div>
    </div>

    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=300" class="product-image" alt="Cream">
      <div class="product-info">
        <span class="product-category">Essentials</span>
        <div class="product-title">Soothing Massage Cream 500gr</div>
        <p class="product-price">Rp 175.000</p>
        <button class="btn-buy">Beli Sekarang</button>
      </div>
    </div>

    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&w=300" class="product-image" alt="Bag">
      <div class="product-info">
        <span class="product-category">Accessories</span>
        <div class="product-title">Professional Therapist Bag</div>
        <p class="product-price">Rp 320.000</p>
        <button class="btn-buy">Beli Sekarang</button>
      </div>
    </div>

  </div>
</div>
`
};


// 2. Fungsi Utama untuk Berpindah Halaman
function loadPage(pageName) {
    const contentDiv = document.getElementById('page-content');
    
    if (pages[pageName]) {
        contentDiv.innerHTML = pages[pageName];
    } else {
        contentDiv.innerHTML = "<h2>Page Not Found</h2>";
    }

    updateActiveNav(pageName);
}

// 3. Fungsi Update Visual Tombol
function updateActiveNav(pageName) {
    // Update Navigasi Bawah
    const bNavItems = document.querySelectorAll('.b-nav-item');
    bNavItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('onclick').includes(`'${pageName}'`)) {
            item.classList.add('active');
        }
    });

    // Update Navigasi Atas (Desktop)
    const dNavItems = document.querySelectorAll('.nav-item');
    dNavItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('onclick').includes(`'${pageName}'`)) {
            item.classList.add('active');
        }
    });
}

// 4. Jalankan saat Website Dibuka
window.onload = () => {
    loadPage('overview');
};

function startScan() {
    alert("Scanning 100+ Pairs... Please wait.");
}

function updateServiceHeatmap() {
    const grid = document.getElementById('service-grid');
    if (!grid) return;

    const areas = [
        { n: "Jakarta Pusat", u: 42, t: 12 },
        { n: "Jakarta Selatan", u: 89, t: 25 },
        { n: "Jakarta Barat", u: 31, t: 8 },
        { n: "Jakarta Utara", u: 15, t: 5 },
        { n: "Tangerang", u: 56, t: 18 },
        { n: "Bekasi", u: 28, t: 10 }
    ];

    let html = "";
    areas.forEach(area => {
        // Tentukan level panas berdasarkan jumlah user (u)
        let level = area.u > 60 ? 'high' : (area.u > 30 ? 'medium' : 'low');
        let barWidth = (area.u / 100) * 100;

        html += `
            <div class="zone-box ${level}">
                <span class="zone-name">${area.n}</span>
                <div class="zone-meta">
                    Users: ${area.u} | Terapis: ${area.t}
                </div>
                <div class="activity-bar">
                    <div style="width:${barWidth}%; background:currentColor; height:100%; border-radius:2px;"></div>
                </div>
            </div>
        `;
    });
    grid.innerHTML = html;
}

// Tambahkan ke fungsi loadPage yang sudah ada
// Ganti logika heatmap lama dengan updateServiceHeatmap

function renderLiveMap() {
    const mapPoints = document.getElementById('map-points');
    if (!mapPoints) return;

    let pointsHtml = "";
    // Kita batasi area spawn agar terlihat "di dalam pulau"
    // Koordinat kira-kira tengah peta (30-70% area)
    
    for (let i = 0; i < 15; i++) {
        let top = Math.random() * 40 + 30; // 30% ke 70%
        let left = Math.random() * 40 + 30;
        pointsHtml += `<div class="point user" style="top:${top}%; left:${left}%;"></div>`;
    }
    
    for (let i = 0; i < 6; i++) {
        let top = Math.random() * 40 + 30;
        let left = Math.random() * 40 + 30;
        pointsHtml += `<div class="point therapist" style="top:${top}%; left:${left}%;"></div>`;
    }
    
    mapPoints.innerHTML = pointsHtml;
}

function updateServiceList() {
    const list = document.getElementById('service-grid');
    if (!list) return;

    const areas = [
        { n: "Jakarta Selatan", val: "HIGH" },
        { n: "Jakarta Pusat", val: "MED" },
        { n: "Tangerang", val: "LOW" }
    ];

    list.innerHTML = areas.map(a => `
        <div class="report-line">
            <span>${a.n}</span>
            <strong style="color:${a.val === 'HIGH' ? 'var(--gold-light)' : '#888'}">${a.val}</strong>
        </div>
    `).join('');
}

// Pastikan dipanggil saat klik Heatmap
const oldLoadPage = loadPage;
loadPage = function(pageName) {
    oldLoadPage(pageName);
    if (pageName === 'heatmap') {
        setTimeout(renderLiveMap, 200);
        setInterval(renderLiveMap, 5000); // Titik berpindah tiap 5 detik
    }
}

// Fungsi untuk Membuka/Tutup Popup Login
function toggleModal(id) {
    const modal = document.getElementById(id);
    
    // Jika modal sedang sembunyi (none atau kosong), maka tampilkan
    if (modal.style.display === "none" || modal.style.display === "") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
}

// Menutup modal secara otomatis jika user klik di luar area logo/modal
window.addEventListener('click', function(e) {
    const logoArea = document.querySelector('.logo-area');
    const modal = document.getElementById('login-modal');
    const btnLogin = document.querySelector('.btn-blue-metallic');

    // Jika yang diklik BUKAN logo, BUKAN modal, dan BUKAN tombol login, maka tutup
    if (modal && !logoArea.contains(e.target) && e.target !== btnLogin) {
        modal.style.display = 'none';
    }
});

function calculateProfit() {
    const amount = document.getElementById('stake-amount').value;
    const rate = document.getElementById('stake-duration').value;
    
    if (amount > 0) {
        const monthly = amount * rate;
        // Kita asumsikan durasi untuk total return (untuk simulasi saja)
        const durationMap = { "0.005": 1, "0.012": 3, "0.018": 6, "0.025": 12 };
        const total = monthly * durationMap[rate];

        document.getElementById('monthly-profit').innerText = '$' + monthly.toLocaleString();
        document.getElementById('total-return').innerText = '$' + (parseFloat(amount) + total).toLocaleString();
    } else {
        document.getElementById('monthly-profit').innerText = '$0.00';
        document.getElementById('total-return').innerText = '$0.00';
    }
}

function showPage(pageName) {
    const contentArea = document.getElementById('main-content');
    
    // Logika untuk menampilkan halaman deposit
    if (pageName === 'deposit') {
        contentArea.innerHTML = pages.deposit; // 'pages.deposit' adalah variabel yang berisi HTML deposit tadi
    } 
    // ... logika page lainnya (dashboard, staking, dll)
}

function selectDeposit(method) {
    const formContainer = document.getElementById('deposit-form-container');
    if (!formContainer) return; // Guard clause agar tidak error jika id tidak ketemu

    formContainer.style.display = 'block'; 

    // Variabel untuk area upload
    const uploadHTML = `
        <div class="upload-section">
            <label for="proof-upload" class="upload-label">
                <i class="material-icons">cloud_upload</i>
                <span>Upload Bukti Transfer (JPG/PNG)</span>
                <input type="file" id="proof-upload" hidden onchange="updateFileName(this)">
            </label>
            <div id="file-chosen" class="file-name-display">Belum ada file dipilih</div>
        </div>
    `;
    
    let formHTML = '';

    if (method === 'crypto') {
        formHTML = `
            <div class="form-header">
                <i class="material-icons">currency_bitcoin</i>
                <span>Deposit via Crypto (USDT)</span>
            </div>
            <div class="deposit-details">
                <p>Silakan kirim USDT ke alamat di bawah ini (Network: <b>BEP20</b>):</p>
                <div class="address-box">
                    <input type="text" value="0x71C7656EC7ab88b098defB751B7401B5f6d8976F" id="cryptoAddr" readonly>
                    <button onclick="copyAddress()"><i class="material-icons">content_copy</i></button>
                </div>
                <div class="qr-placeholder" style="text-align:center; background:white; padding:10px; width:fit-content; margin:10px auto; border-radius:10px;">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=0x71C7656EC7ab88b098defB751B7401B5f6d8976F" alt="QR Code">
                </div>
                ${uploadHTML} <button class="btn-confirm-dep" onclick="alert('Bukti sedang dikirim ke Admin...')">SAYA SUDAH TRANSFER</button>
            </div>
        `;
    } else if (method === 'bank') {
        formHTML = `
            <div class="form-header">
                <i class="material-icons">account_balance</i>
                <span>Deposit via Bank Transfer</span>
            </div>
            <div class="deposit-details">
                <p>Transfer tepat sesuai nominal ke Virtual Account berikut:</p>
                <div class="bank-info">
                    <div class="bank-row"><span>Bank:</span> <b>BCA (Virtual Account)</b></div>
                    <div class="bank-row"><span>Nomor:</span> <b>8830 0812 3456 7890</b></div>
                    <div class="bank-row"><span>Nama:</span> <b>RELAXGO - USER</b></div>
                </div>
                ${uploadHTML} <button class="btn-confirm-dep" onclick="alert('Pembayaran dikirim untuk verifikasi...')">KONFIRMASI PEMBAYARAN</button>
            </div>
        `;
    } else if (method === 'paypal') {
        formHTML = `
            <div class="form-header">
                <i class="material-icons">payments</i>
                <span>Deposit via PayPal</span>
            </div>
            <div class="deposit-details">
                <p>Anda akan diarahkan ke halaman aman PayPal untuk menyelesaikan pembayaran.</p>
                <div class="input-group">
                    <label style="display:block; margin-bottom:5px;">Jumlah Deposit (USD)</label>
                    <input type="number" placeholder="Min. $10" class="gold-input" style="width:100%; padding:10px; border-radius:5px; background:#222; border:1px solid #444; color:white;">
                </div>
                <button class="btn-confirm-dep" style="background:#0070ba; color:white; margin-top:15px;">PAY WITH PAYPAL</button>
            </div>
        `;
    }

    formContainer.innerHTML = formHTML;
    formContainer.scrollIntoView({ behavior: 'smooth' });
}



// FUNGSI INI HARUS DI LUAR selectDeposit
function updateFileName(input) {
    const display = document.getElementById('file-chosen');
    if (display && input.files && input.files.length > 0) {
        display.innerText = "File terpilih: " + input.files[0].name;
        display.style.color = "#FFD700"; 
    }
}

// FUNGSI INI JUGA HARUS DI LUAR
function copyAddress() {
    const copyText = document.getElementById("cryptoAddr");
    if (copyText) {
        copyText.select();
        copyText.setSelectionRange(0, 99999); // Untuk mobile
        navigator.clipboard.writeText(copyText.value);
        alert("Alamat berhasil di-copy: " + copyText.value);
    }
}

function confirmDeposit(method) {
    // Simulasi loading sebentar agar terasa nyata
    const btn = event.target;
    const originalText = btn.innerText;
    btn.innerText = "PROCESSING...";
    btn.disabled = true;

    setTimeout(() => {
        showToast(`Deposit via ${method} Berhasil Dikirim! Admin akan segera memverifikasi.`);
        btn.innerText = originalText;
        btn.disabled = false;
        
        // Opsional: Reset form setelah sukses
        document.getElementById('deposit-form-container').style.display = 'none';
    }, 1500);
}

function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    
    toast.innerHTML = `
        <div class="toast-content">
            <i class="material-icons">check_circle</i>
            <span>${message}</span>
        </div>
        <div class="toast-progress"></div>
    `;

    container.appendChild(toast);

    // Hapus toast otomatis setelah 4 detik
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.5s forwards';
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

function confirmDeposit(method) {
    // ... (kode processing & toast yang lama tetap di sini) ...

    const historyBody = document.getElementById('transaction-history-body');
    const newId = "#RXG-" + Math.floor(1000 + Math.random() * 9000);
    const date = new Date().toLocaleDateString('id-ID', { day:'numeric', month:'short', year:'numeric' });

    // Tambahkan baris baru ke paling atas tabel
    const newRow = `
        <tr>
            <td>${newId}</td>
            <td>${method}</td>
            <td>Processing...</td>
            <td>${date}</td>
            <td><span class="status-badge pending">Pending</span></td>
        </tr>
    `;
    
    // Masukkan ke tabel dengan animasi halus
    historyBody.insertAdjacentHTML('afterbegin', newRow);
}

function processWithdraw() {
    const amount = document.getElementById('withdraw-amount').value;
    const dest = document.getElementById('withdraw-dest').value;

    if (!amount || amount < 10) {
        showToast("Minimal penarikan adalah $10.00");
        return;
    }

    if (!dest) {
        showToast("Mohon isi tujuan penarikan Anda.");
        return;
    }

    // Simulasi batasan 1x sehari
    showToast("Permintaan Withdraw Berhasil! Admin akan memproses dalam 24 jam.");
    
    // Opsional: Masukkan ke history sebagai "Pending Withdraw"
    console.log("Withdrawal Requested:", { amount, dest });
}

function processWithdraw() {
    const lastWithdraw = localStorage.getItem('last_withdraw_date');
    const today = new Date().toDateString();

    // Cek apakah hari ini sudah pernah withdraw
    if (lastWithdraw === today) {
        showToast("Maaf, penarikan dibatasi 1 kali saja per hari. Silakan coba lagi besok.");
        return;
    }

    const amount = document.getElementById('withdraw-amount').value;
    const dest = document.getElementById('withdraw-dest').value;

    if (amount < 10 || !dest) {
        showToast("Mohon lengkapi jumlah (min $10) dan data tujuan.");
        return;
    }

    // Jika lolos cek, simpan tanggal hari ini
    localStorage.setItem('last_withdraw_date', today);
    
    showToast("Permintaan Withdraw Berhasil Dikirim!");
    
    // Kembali ke halaman wallet setelah 2 detik
    setTimeout(() => {
        loadPage('deposit');
    }, 2000);
}



let slideIndex = 1;
let slideTimer; // Variabel untuk menyimpan timer otomatis

function initSlideshow() {
    showSlides(slideIndex);
    
    // Mulai jalankan otomatis setiap 5 detik (5000ms)
    startSlideTimer();
}

function startSlideTimer() {
    // Bersihkan timer lama jika ada (mencegah double timer)
    if (slideTimer) clearInterval(slideTimer);
    
    slideTimer = setInterval(() => {
        plusSlides(1);
    }, 5000); 
}

// Navigasi Next/Prev (Manual)
function plusSlides(n) {
    showSlides(slideIndex += n);
    
    // Reset timer otomatis setelah user klik manual
    // Jadi user punya waktu 5 detik lagi untuk melihat slide yang baru diklik
    startSlideTimer();
}

// Navigasi via Titik/Dots (Manual)
function currentSlide(n) {
    showSlides(slideIndex = n);
    
    // Reset timer juga di sini
    startSlideTimer();
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (slides.length === 0) return;

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    // Sembunyikan semua slide dengan efek transisi
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// Fungsi untuk memunculkan/menutup modal
function toggleAuthModal() {
    const modal = document.getElementById('auth-modal');
    modal.style.display = (modal.style.display === 'none') ? 'flex' : 'none';
}

// Fungsi untuk switch Login/Register
function switchAuth(type) {
    const loginTab = document.getElementById('tab-login');
    const registerTab = document.getElementById('tab-register');
    const submitBtn = document.querySelector('.auth-submit');

    if (type === 'login') {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        submitBtn.innerText = "LOGIN";
        document.querySelector('.auth-options').style.display = 'none'; // Sembunyikan checkbox saat login
    } else {
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        submitBtn.innerText = "CREATE ACCOUNT";
        document.querySelector('.auth-options').style.display = 'block'; // Munculkan checkbox saat register
    }
}

function toggleAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
        if (modal.style.display === "none" || modal.style.display === "") {
            modal.style.display = "flex";
            // Fokuskan ke input email agar user bisa langsung ngetik
            document.getElementById('auth-email').focus();
        } else {
            modal.style.display = "none";
        }
    } else {
        console.error("Elemen auth-modal tidak ditemukan!");
    }
}

// Tambahan: Menutup modal jika user klik di luar kotak (area hitam)
window.onclick = function(event) {
    const modal = document.getElementById('auth-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function toggleWalletModal() {
    const modal = document.getElementById('wallet-modal');
    modal.style.display = (modal.style.display === 'none' || modal.style.display === "") ? 'flex' : 'none';
}

async function connectWallet(type) {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Meminta akses akun
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const walletAddress = accounts[0];
            
            // Format alamat (Contoh: 0x123...abcd)
            const shortAddress = walletAddress.substring(0, 6) + "..." + walletAddress.substring(walletAddress.length - 4);
            
            // Update UI Tombol
            const connectBtn = document.getElementById('connect-wallet-btn');
            connectBtn.innerText = shortAddress;
            connectBtn.classList.add('connected');
            connectBtn.style.borderColor = "#00FF7F"; // Warna hijau tanda sukses
            
            showToast(`Wallet ${type.toUpperCase()} Connected!`);
            toggleWalletModal();
            
        } catch (error) {
            console.error(error);
            showToast("User rejected the connection.");
        }
    } else {
        showToast(`Please install ${type} extension/app!`);
        // Buka link download wallet jika belum terinstall
        if(type === 'metamask') window.open('https://metamask.io/download/', '_blank');
    }
}

// Tutup modal jika klik di luar box
window.onclick = function(event) {
    const authModal = document.getElementById('auth-modal');
    const walletModal = document.getElementById('wallet-modal');
    if (event.target == authModal) authModal.style.display = "none";
    if (event.target == walletModal) walletModal.style.display = "none";
}

// 1. Fungsi untuk Membuka/Menutup Modal Wallet
function toggleWalletModal() {
    const modal = document.getElementById('wallet-modal');
    if (modal) {
        modal.style.display = (modal.style.display === 'none' || modal.style.display === "") ? 'flex' : 'none';
    }
}

// 2. Logika Utama Koneksi Wallet (EVM Based: MetaMask, Trust, Coinbase)
async function connectWallet(walletType) {
    // Mengecek apakah browser mendukung Web3 (Ethereun Provider)
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Meminta user memilih akun
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const selectedAccount = accounts[0];

            // Jika sukses mendapatkan akun
            if (selectedAccount) {
                handleWalletConnected(selectedAccount, walletType);
            }
        } catch (error) {
            console.error("User menolak koneksi:", error);
            showToast("Connection rejected by user.");
        }
    } else {
        // Jika tidak ada provider wallet terinstall
        showToast(`Please install ${walletType} to continue.`);
        
        // Redirect ke link download sesuai tipe
        if (walletType === 'metamask') window.open('https://metamask.io/', '_blank');
        if (walletType === 'trust') window.open('https://trustwallet.com/', '_blank');
    }
}

// 3. Fungsi untuk Update UI setelah terhubung
function handleWalletConnected(address, type) {
    const connectBtn = document.getElementById('connect-wallet-btn');
    
    // Memotong alamat agar terlihat rapi (contoh: 0x1234...abcd)
    const shortAddress = address.substring(0, 6) + "..." + address.substring(address.length - 4);
    
    // Update tampilan tombol di Header
    if (connectBtn) {
        connectBtn.innerHTML = `<i class="material-icons" style="font-size:14px; vertical-align:middle;">account_balance_wallet</i> ${shortAddress}`;
        connectBtn.style.background = "linear-gradient(45deg, #006400, #00FF7F)"; // Warna hijau sukses
        connectBtn.style.color = "white";
        connectBtn.style.border = "none";
    }

    // Simpan alamat di session (agar tidak hilang saat refresh sementara)
    sessionStorage.setItem('user_wallet', address);
    
    showToast(`${type.toUpperCase()} Connected Successfully!`);
    toggleWalletModal(); // Tutup modal setelah sukses
}

// 4. Cek Koneksi Otomatis saat Halaman di-refresh
window.addEventListener('load', () => {
    const savedWallet = sessionStorage.getItem('user_wallet');
    if (savedWallet) {
        handleWalletConnected(savedWallet, 'Saved');
    }
});

// Fungsi pembantu untuk notifikasi (Toast)
function showToast(message) {
    const container = document.getElementById('toast-container');
    if (container) {
        const toast = document.createElement('div');
        toast.className = 'toast-msg';
        toast.innerText = message;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    } else {
        alert(message);
    }
}

// Variabel Global untuk menyimpan pilihan user
let selectedLendingProvider = "AAVE V3"; // Default awal
let selectedNetwork = "ETHEREUM"; // Default awal
let lockedTarget = { name: '', gap: 0 }; // Menyimpan target yang aktif
let liveUpdateInterval = null; // Menampung interval agar tidak tumpang tindih


// Fungsi untuk memilih Lending Provider
function selectProvider(element, providerName) {
    // Hapus class 'active-selection' dari semua tombol provider
    const buttons = document.querySelectorAll('.provider-btn');
    buttons.forEach(btn => btn.classList.remove('active-selection'));
    
    // Tambahkan class ke yang diklik
    element.classList.add('active-selection');
    
    // Simpan nilainya
    selectedLendingProvider = providerName;
    console.log("Provider Selected:", selectedLendingProvider);
}

// Fungsi untuk memilih Network
function selectNetwork(element, networkName) {
    // Hapus class 'active-selection' dari semua tombol network
    const buttons = document.querySelectorAll('.network-btn');
    buttons.forEach(btn => btn.classList.remove('active-selection'));
    
    // Tambahkan class ke yang diklik
    element.classList.add('active-selection');
    
    // Simpan nilainya
    selectedNetwork = networkName;
    console.log("Network Selected:", selectedNetwork);
}

// Fungsi utama saat tombol besar di bawah diklik
function transferGuarantee() {
    const loanAmount = document.getElementById('loan-amount').value;
    const depositGuarantee = document.getElementById('deposit-guarantee').value;

    if (!loanAmount || loanAmount <= 0) {
        showToast("Please enter a valid Loan Amount.");
        return;
    }

    // Eksekusi aksi (Contoh simulasi)
    showToast(`Processing ${selectedLendingProvider} on ${selectedNetwork}...`);
    // Lanjutkan ke fungsi Smart Contract atau Firebase kamu di sini
}

// Pastikan variabel ini ada di paling atas file js kamu
// Pastikan ini ada di paling atas file JS
let currentFee = 0.09; 

function updateFee(element, p1, p2) {
    // A. DETEKSI DATA (PENTING!)
    let nameValue, feeValue;

    // Jika p1 adalah String (Teks), maka p1 = Nama, p2 = Fee
    if (typeof p1 === 'string') {
        nameValue = p1;
        feeValue = parseFloat(p2);
    } 
    // Jika p1 adalah Number (Angka), maka p1 = Fee, p2 = Nama
    else {
        feeValue = parseFloat(p1);
        nameValue = p2;
    }

    // B. UPDATE WARNA TOMBOL (EMAS)
    // Ambil semua tombol dengan class .proto-btn
    const allButtons = document.querySelectorAll('.proto-btn');
    allButtons.forEach(btn => {
        btn.classList.remove('active'); // Matikan semua
    });

    // Nyalakan yang diklik
    if (element) {
        element.classList.add('active');
    }

    // C. UPDATE TAMPILAN (Agar tidak muncul "Uniswap%")
    currentFee = feeValue;
    const feeDisplay = document.getElementById('display-fee');
    if (feeDisplay) {
        // Kita paksa hanya menampilkan ANGKA (0.30)
        feeDisplay.innerText = feeValue.toFixed(2); 
    }

    // Update laporan kalkulasi 30:70
    if (typeof calcArbitrage === "function") {
        calcArbitrage();
    }
}

// Fungsi Update Network
function updateNetwork(btn, network) {
    document.querySelectorAll('.net-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    showToast(`Network switched to ${network}`);
}

// Fungsi Kalkulasi Arbitrage (Profit Sharing 30:70)
function calcArbitrage() {
    // 1. Ambil input dan pastikan tipe datanya angka (Number)
    const loanInput = document.getElementById('loan-amount');
    const loan = parseFloat(loanInput.value) || 0;
    
    // Pastikan currentFee adalah angka (bukan teks 'Pancake')
    const feePercent = parseFloat(currentFee) || 0; 
    
    const profitOpp = 2.45; // Estimasi gap harga (bisa dibuat dinamis nanti)

    // 2. Logika Perhitungan
    // Hitung Gross Profit (Keuntungan Kotor)
    const grossProfit = loan * (profitOpp / 100);
    
    // Hitung Biaya Protokol berdasarkan provider yang dipilih
    const protocolFeeVal = loan * (feePercent / 100);
    
    // Hitung Net Profit (Setelah potong biaya protokol)
    const netProfit = Math.max(0, grossProfit - protocolFeeVal);
    
    // 3. Profit Sharing 30:70 (Sesuai Standar Portal kita)
    const userShare = netProfit * 0.7;
    const devShare = netProfit * 0.3;

    // 4. Update ke UI Report (Laporan di sisi kanan)
    // Gunakan safe-check agar tidak error jika ID belum termuat
    const updateText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.innerText = text;
    };

    updateText('rep-loan', loan.toLocaleString() + " USDT");
    updateText('rep-fee-val', protocolFeeVal.toFixed(2) + " USDT");
    updateText('rep-gross', grossProfit.toFixed(2) + " USDT");
    updateText('rep-net', netProfit.toFixed(2) + " USDT");
    updateText('rep-user', userShare.toFixed(2) + " USDT");
    updateText('rep-dev', devShare.toFixed(2) + " USDT");

    // Efek Visual: Jika Net Profit > 0, beri warna hijau neon agar menarik
    const netProfitEl = document.getElementById('rep-net');
    if (netProfitEl) {
        netProfitEl.style.color = netProfit > 0 ? "#00FF7F" : "#ff4444";
    }
}

function transferCollateral() {
    const amount = document.getElementById('deposit-amount').value;
    if(!amount || amount <= 0) return showToast("Enter deposit guarantee amount!");
    showToast("Processing transfer to Smart Contract...");
}

// Daftar 20 koin utama untuk diulang sampai 100 baris
// 1. DAFTAR DATA (Pondasi untuk 100 baris)
const assets = ['BTC', 'ETH', 'SOL', 'BNB', 'ADA', 'XRP', 'DOT', 'AVAX', 'LINK', 'MATIC', 'LTC', 'UNI', 'ATOM', 'TRX', 'ETC', 'BCH', 'XLM', 'ALGO', 'ICP', 'VET'];
const dexList = ['Uniswap V3', 'PancakeSwap', 'SushiSwap', 'Curve', 'Balancer', 'Jupiter', 'Raydium'];

// 2. FUNGSI UTAMA SCANNER
function updateLiveScanner() {
    // Pastikan ID ini sama dengan yang ada di <tbody> tabelmu
    const tableBody = document.getElementById('scanner-body'); 
    if (!tableBody) return;

    let rowsHtml = '';
    
    for (let i = 1; i <= 100; i++) {
        // Logika untuk menghasilkan 100 koin dari daftar assets
        const asset = assets[i % assets.length] + (i > assets.length ? Math.floor(i/assets.length) : "");
        const dexA = dexList[Math.floor(Math.random() * dexList.length)];
        let dexB = dexList[Math.floor(Math.random() * dexList.length)];
        
        // Pastikan DEX A dan DEX B tidak sama agar logis
        if (dexA === dexB) dexB = "KyberSwap"; 

        // Simulasi angka Gap (0.5% - 3.0%) dan Profit (20 - 170 USDT)
        const gap = (Math.random() * 2.5 + 0.5).toFixed(2); 
        const estProfit = (Math.random() * 150 + 20).toFixed(2); 

        rowsHtml += `
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <td>${i}</td>
                <td style="color: #FFD700; font-weight: bold;">${asset}/USDT</td>
                <td><span class="badge bg-dark border border-secondary" style="font-weight: normal; opacity: 0.8;">${dexA}</span></td>
                <td><span class="badge bg-dark border border-secondary" style="font-weight: normal; opacity: 0.8;">${dexB}</span></td>
                <td style="color: #00FF7F; font-weight: bold;">${gap}%</td>
                <td style="color: #00FF7F;">+${estProfit} USDT</td>
                <td>
                    <button class="btn-execute-mini" onclick="autoFill('${asset}', ${gap})">
                        EXECUTE
                    </button>
                </td>
            </tr>
        `;
    }
    
    // Masukkan semua baris sekaligus ke dalam tabel
    tableBody.innerHTML = rowsHtml;
}

// 3. JALANKAN SCANNER SECARA OTOMATIS
// Update setiap 5 detik agar tidak terlalu berat tapi tetap terasa "Live"
setInterval(updateLiveScanner, 5000);

// Panggil fungsi ini sekali saat script dimuat pertama kali
updateLiveScanner();

// Jalankan scanner setiap 5 detik agar tidak terlalu cepat (nyaman di mata)
setInterval(updateLiveScanner, 5000);
updateLiveScanner(); // Jalankan sekali saat start

// Fungsi agar tombol EXECUTE bisa mengisi data ke kalkulator otomatis
function autoFill(asset, gap) {
    // 1. Update teks status atau informasi di panel kanan (jika ada)
    console.log(`Executing Arbitrage for ${asset} with ${gap}% gap`);
    
    // 2. Kamu bisa buat variabel profitOpp di calcArbitrage jadi dinamis
    // Misal: kita simpan ke window agar bisa dibaca fungsi kalkulator
    window.currentSelectedGap = parseFloat(gap);
    
    // 3. Jalankan ulang hitungan
    if(typeof calcArbitrage === "function") {
        calcArbitrage();
    }
    
    // 4. Beri notifikasi kecil (Optional)
    alert(`Asset ${asset} selected! Gap ${gap}% applied to calculator.`);
}

function autoFill(asset, gap, price) {
    // 1. Update Input Loan secara otomatis (Misal default 10,000 USDT agar terlihat besar)
    const loanInput = document.getElementById('loan-amount');
    if (loanInput && (!loanInput.value || loanInput.value == 0)) {
        loanInput.value = 10000; 
    }

    // 2. Update Tampilan Report di Panel Kanan
    const repPair = document.getElementById('rep-pair');
    const repPct = document.getElementById('rep-pct');
    
    if (repPair) repPair.innerText = `${asset}/USDT`;
    if (repPct) {
        repPct.innerText = `${gap}%`;
        repPct.style.color = "#00FF7F"; // Warna hijau neon
    }

    // 3. Simpan gap ke variabel global agar hitungan calcArbitrage akurat
    window.selectedGap = parseFloat(gap);

    // 4. Jalankan ulang kalkulasi utama
    if (typeof calcArbitrage === "function") {
        calcArbitrage();
    }

    // 5. Efek Visual: Scroll halus ke atas agar user lihat laporannya berubah
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    console.log(`⚡ Executing Arbitrage for ${asset} | Gap: ${gap}%`);
}

function calcArbitrage() {
    const loan = parseFloat(document.getElementById('loan-amount').value) || 0;
    const feePct = currentFee; // Dari tombol provider (Aave, dll)
    
    // Gunakan gap dari tabel jika ada, jika tidak pakai default 2.45
    const profitGap = window.selectedGap || 2.45; 

    // Rumus Kalkulasi
    const grossProfit = loan * (profitGap / 100);
    const protocolFee = loan * (feePct / 100);
    const netProfit = grossProfit - protocolFee;
    
    // Profit Sharing 70:30
    const userShare = netProfit * 0.7;
    const devShare = netProfit * 0.3;

    // Update UI Report
    document.getElementById('rep-loan').innerText = loan.toLocaleString();
    document.getElementById('rep-fee-val').innerText = protocolFee.toFixed(2);
    document.getElementById('rep-gross').innerText = grossProfit.toFixed(2);
    document.getElementById('rep-net').innerText = netProfit.toFixed(2);
    document.getElementById('rep-user').innerText = userShare.toFixed(2);
    document.getElementById('rep-dev').innerText = devShare.toFixed(2);
    
    // Update Deposit Guarantee (Biasanya 10% dari Loan)
    document.getElementById('deposit-amount').value = (loan * 0.1).toFixed(2);
}

let gasMultiplier = 1.2; // Default Average

function setGas(type, multiplier) {
    gasMultiplier = multiplier;
    // Update UI tombol
    document.querySelectorAll('.gas-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    updateGasRequirement();
}

function updateGasRequirement() {
    // 1. Ambil input Loan
    const loanInput = document.getElementById('loan-amount');
    const loanValue = parseFloat(loanInput.value) || 0;

    // 2. Kalkulasi Biaya (Aave Fee 0.09% + Gas Dasar $15.00)
    // Kita gunakan currentGasMultiplier dari tombol Low/Fast/Instant
    const aaveFee = loanValue * 0.0009;
    const baseContractGas = 15.00; 
    const totalRequired = (aaveFee + baseContractGas) * (window.currentGasMultiplier || 1.2);

    // --- UPDATE TAMPILAN KIRI (DI BAWAH INPUT) ---
    const gasDisplay = document.getElementById('total-gas-cost');
    if (gasDisplay) {
        gasDisplay.innerText = totalRequired.toFixed(2);
    }

    // --- UPDATE TAMPILAN KANAN (FINAL REPORT) ---
    const reqDepositDisplay = document.getElementById('required-deposit');
    if (reqDepositDisplay) {
        reqDepositDisplay.innerText = totalRequired.toFixed(2) + " USDT";
    }

    // Update otomatis field deposit (agar user tinggal klik transfer)
    const depositInput = document.getElementById('deposit-amount');
    if (depositInput) {
        depositInput.value = totalRequired.toFixed(2);
    }

    // --- LOGIKA SAFETY GUARD (PENGECEKAN SALDO) ---
    
    // Ambil saldo Smart Contract dari elemen di panel kanan
    const contractBalElem = document.getElementById('contract-balance');
    const contractBalance = parseFloat(contractBalElem.innerText) || 0;
    
    // Ambil referensi tombol Execute (ID baru: btn-execute-main)
    const btnExecute = document.getElementById('btn-execute-main');

    if (btnExecute) {
        if (totalRequired > contractBalance && loanValue > 0) {
            // JIKA SALDO KURANG: Tombol jadi Merah & Terkunci
            btnExecute.innerHTML = '<i class="material-icons" style="font-size:16px;">block</i> BALANCE LOW';
            btnExecute.style.background = 'linear-gradient(45deg, #8B0000, #FF4500)';
            btnExecute.style.color = '#fff';
            btnExecute.style.cursor = 'not-allowed';
            btnExecute.disabled = true;
        } else {
            // JIKA SALDO CUKUP: Tombol Emas & Aktif
            btnExecute.innerHTML = '<i class="material-icons" style="font-size:16px;">flash_on</i> EXECUTE NOW';
            btnExecute.style.background = 'linear-gradient(45deg, #B8860B, #FFD700)';
            btnExecute.style.color = '#000';
            btnExecute.style.cursor = 'pointer';
            btnExecute.disabled = false;
        }
    }

    // Jalankan kalkulasi profit utama agar laporan kanan sinkron secara keseluruhan
    if (typeof calcArbitrage === "function") {
        calcArbitrage();
    }
}

// Variabel Global untuk menyimpan pengali Gas
let currentGasMultiplier = 1.2; 

/**
 * Fungsi untuk mengatur level Gas (Low, Fast, Instant)
 */
function setGas(element, multiplier, label) {
    currentGasMultiplier = multiplier;

    // Update UI Tombol agar yang diklik menyala emas
    const gasButtons = document.querySelectorAll('.gas-btn');
    gasButtons.forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    console.log(`Gas Priority set to: ${label} (x${multiplier})`);
    
    // Hitung ulang biaya gas secara real-time
    updateGasRequirement();
}

/**
 * Fungsi Utama untuk menghitung Biaya Gas & Update Panel Kanan
 */
function updateGasRequirement() {
    const loanInput = document.getElementById('loan-amount');
    const loanValue = parseFloat(loanInput.value) || 0;

    // 1. Hitung Fee Aave (Tetap 0.09%)
    const aaveFee = loanValue * 0.0009;

    // 2. Estimasi Biaya Smart Contract Dasar (Misal $15.00)
    const baseContractGas = 15.00;

    // 3. Total Gas yang dibutuhkan (Aave Fee + Gas Dasar) dikali Multiplier Kecepatan
    const totalRequired = (aaveFee + baseContractGas) * currentGasMultiplier;

    // --- UPDATE TAMPILAN ---

    // Update teks di bawah input Loan
    const gasDisplay = document.getElementById('total-gas-cost');
    if (gasDisplay) {
        gasDisplay.innerText = totalRequired.toFixed(2);
    }

    // Update "Required Gas Deposit" di Panel Kanan (Final Execution Report)
    const reqDepositDisplay = document.getElementById('required-deposit');
    if (reqDepositDisplay) {
        reqDepositDisplay.innerText = totalRequired.toFixed(2) + " USDT";
    }

    // Update Input Deposit secara otomatis (Saran deposit ke user)
    const depositInput = document.getElementById('deposit-amount');
    if (depositInput) {
        depositInput.value = totalRequired.toFixed(2);
    }

    // Jalankan kalkulasi profit utama agar laporan kanan sinkron
    if (typeof calcArbitrage === "function") {
        calcArbitrage();
    }
}

function calcArbitrage() {
    const loan = parseFloat(document.getElementById('loan-amount').value) || 0;
    
    // Ambil nilai Gap dari koin yang dipilih (default 2.45% jika belum pilih)
    const profitGap = window.selectedGap || 2.45; 
    
    // Hitung Gross Profit
    const grossProfit = loan * (profitGap / 100);
    
    // Hitung Fee Aave saja (0.09%) untuk laporan baris Fee
    const aaveFeeOnly = loan * 0.0009;
    
    // Ambil total biaya eksekusi (Gas + Fee) dari perhitungan updateGasRequirement
    const totalExecutionCost = parseFloat(document.getElementById('total-gas-cost').innerText) || 0;

    // Net Profit = Untung Kotor - Total Biaya Eksekusi
    const netProfit = grossProfit - totalExecutionCost;
    
    // Profit Sharing 70:30
    const userShare = netProfit > 0 ? netProfit * 0.7 : 0;
    const devShare = netProfit > 0 ? netProfit * 0.3 : 0;

    // UPDATE UI PANEL KANAN
    document.getElementById('rep-loan').innerText = loan.toLocaleString() + " USDT";
    document.getElementById('rep-fee-val').innerText = aaveFeeOnly.toFixed(2) + " USDT";
    document.getElementById('rep-pct').innerText = profitGap + "%";
    document.getElementById('rep-gross').innerText = grossProfit.toFixed(2) + " USDT";
    document.getElementById('rep-net').innerText = (netProfit > 0 ? netProfit.toFixed(2) : "0.00") + " USDT";
    document.getElementById('rep-user').innerText = userShare.toFixed(2) + " USDT";
    document.getElementById('rep-dev').innerText = devShare.toFixed(2) + " USDT";
}

function updateGasRequirement() {
    const loanInput = document.getElementById('loan-amount');
    const loanValue = parseFloat(loanInput.value) || 0;

    // 1. Hitung Fee Aave (0.09%) + Biaya Gas Dasar ($15)
    const aaveFee = loanValue * 0.0009;
    const baseContractGas = 15.00;
    const totalRequired = (aaveFee + baseContractGas) * currentGasMultiplier;

    // --- UPDATE UI TEXT ---
    document.getElementById('total-gas-cost').innerText = totalRequired.toFixed(2);
    document.getElementById('required-deposit').innerText = totalRequired.toFixed(2) + " USDT";
    document.getElementById('deposit-amount').value = totalRequired.toFixed(2);

    // --- LOGIKA PENGECEKAN SALDO SMART CONTRACT ---
    
    // Ambil angka saldo dari Smart Contract (Panel Kanan)
    const contractBalanceText = document.getElementById('contract-balance').innerText;
    const contractBalance = parseFloat(contractBalanceText) || 0;
    
    // Ambil element tombol Execute
    const btnExecute = document.querySelector('.btn-gold-wide');

    if (totalRequired > contractBalance && loanValue > 0) {
        // JIKA SALDO KURANG: Tombol Merah & Text Berubah
        btnExecute.innerHTML = '<i class="material-icons">error_outline</i> INSUFFICIENT CONTRACT BALANCE';
        btnExecute.style.background = 'linear-gradient(45deg, #8B0000, #FF0000)'; // Merah Gelap ke Terang
        btnExecute.style.color = '#fff';
        btnExecute.style.cursor = 'not-allowed';
        btnExecute.disabled = true; // Matikan fungsi klik
    } else {
        // JIKA SALDO CUKUP: Balikkan ke Emas
        btnExecute.innerHTML = '<i class="material-icons">flash_on</i> EXECUTE FLASHLOAN & ARBITRAGE';
        btnExecute.style.background = 'linear-gradient(45deg, #B8860B, #FFD700)'; // Emas RELAXGO
        btnExecute.style.color = '#000';
        btnExecute.style.cursor = 'pointer';
        btnExecute.disabled = false; // Aktifkan fungsi klik
    }

    if (typeof calcArbitrage === "function") calcArbitrage();
}

// Variabel awal saldo user (bisa kamu ganti sesukamu)
let currentWalletBalance = 1250.00;

function executeFlashLoan() {
    const btnExecute = document.querySelector('.btn-gold-wide');
    const userShareAmount = parseFloat(document.getElementById('rep-user').innerText) || 0;

    if (userShareAmount <= 0) {
        alert("Please select a profitable arbitrage opportunity first!");
        return;
    }

    // 1. Efek Loading (Seolah-olah proses Blockchain)
    btnExecute.disabled = true;
    btnExecute.innerHTML = '<i class="fas fa-spinner fa-spin"></i> INTERACTING WITH AAVE V3...';
    
    setTimeout(() => {
        btnExecute.innerHTML = '<i class="fas fa-sync fa-spin"></i> SWAPPING ASSETS ON DEX...';
        
        setTimeout(() => {
            // 2. Kalkulasi Penambahan Saldo
            currentWalletBalance += userShareAmount;
            
            // 3. Update Tampilan Saldo dengan Animasi
            const walletDisplay = document.getElementById('user-wallet-balance');
            walletDisplay.innerText = currentWalletBalance.toLocaleString(undefined, {minimumFractionDigits: 2}) + " USDT";
            
            // Efek berkedip hijau saat saldo bertambah
            walletDisplay.style.textShadow = "0 0 15px #00FF7F";
            setTimeout(() => { walletDisplay.style.textShadow = "none"; }, 2000);

            // 4. Reset Tombol & Notifikasi Sukses
            btnExecute.disabled = false;
            btnExecute.innerHTML = '<i class="material-icons">check_circle</i> SUCCESS! PROFIT WITHDRAWN';
            btnExecute.style.background = 'linear-gradient(45deg, #006400, #00FF7F)';
            
            alert(`⚡ Flashloan Success!\nNet Profit: ${userShareAmount.toFixed(2)} USDT has been sent to your wallet.`);
            
            // Kembalikan tombol ke status awal setelah 5 detik
            setTimeout(() => {
                updateGasRequirement(); // Reset warna emas/merah sesuai saldo gas
            }, 5000);

        }, 2000);
    }, 2000);
}

const dragbar = document.getElementById('dragbar');
const upper = document.getElementById('report-upper');
const consoleBox = document.getElementById('report-console');
const container = document.getElementById('resizable-report-container');

let isDragging = false;

dragbar.addEventListener('mousedown', function(e) {
    isDragging = true;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(e) {
    if (!isDragging) return;
    
    // Hitung posisi mouse relatif terhadap container
    const containerRect = container.getBoundingClientRect();
    const relativeY = e.clientY - containerRect.top;
    
    // Batasan agar tidak terlalu ke atas atau ke bawah
    if (relativeY > 100 && relativeY < containerRect.height - 50) {
        upper.style.flex = "none";
        upper.style.height = relativeY + "px";
        consoleBox.style.height = (containerRect.height - relativeY - 5) + "px";
    }
}

function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
}

function addLog(message, type = 'info') {
    const output = document.getElementById('terminal-output');
    const time = new Date().toLocaleTimeString();
    let color = "#00FF7F"; // Default hijau (success/info)
    
    if(type === 'error') color = "#FF4500"; // Merah (error)
    if(type === 'warn') color = "#FFD700"; // Kuning (warning)

    const newLog = document.createElement('div');
    newLog.style.marginBottom = "3px";
    newLog.innerHTML = `<span style="color: #666;">[${time}]</span> <span style="color: ${color}">${message}</span>`;
    
    output.appendChild(newLog);
    
    // Auto scroll ke bawah agar pesan terbaru selalu terlihat
    const consoleDiv = document.getElementById('report-console');
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

// CONTOH PENGGUNAAN SAAT EKSEKUSI
function executeFlashLoan() {
    addLog("Initiating Flashloan transaction...", "info");
    addLog("Provider: Aave V3 Mainnet", "warn");
    
    setTimeout(() => {
        addLog("Borrowing 10,000 USDT... SUCCESS", "info");
        addLog("Checking DEX arbitrage path: Uniswap -> PancakeSwap", "info");
        
        setTimeout(() => {
            addLog("Executing Swap... Profit 245.50 USDT realized", "info");
            addLog("Repaying Aave V3 Loan... DONE", "info");
            addLog("Transaction Hash: 0x7a2...f4e", "warn");
        }, 1500);
    }, 1000);
}

function initResizer() {
    const dragbar = document.getElementById('dragbar');
    const upperPanel = document.getElementById('report-upper');
    const consolePanel = document.getElementById('report-console');
    const container = document.getElementById('main-resizer-container');
    
    // Cek apakah elemen sudah ada di DOM
    if (!dragbar || !upperPanel || !container) {
        console.log("Resizer elements not found, retrying...");
        return; 
    }

    let isDragging = false;

    dragbar.onmousedown = function(e) {
        isDragging = true;
        document.body.style.cursor = 'ns-resize';
        dragbar.style.background = '#FFD700'; // Warna emas saat ditarik
        document.body.style.userSelect = 'none'; // Biar teks gak ke-blok
    };

    document.onmousemove = function(e) {
        if (!isDragging) return;

        const containerRect = container.getBoundingClientRect();
        let newUpperHeight = e.clientY - containerRect.top;

        // Full Range: Biarkan user geser dari atas sampai bawah
        if (newUpperHeight >= 0 && newUpperHeight <= containerRect.height) {
            upperPanel.style.height = newUpperHeight + 'px';
            // Panel bawah otomatis menyesuaikan sisa tinggi container
            if (consolePanel) {
                consolePanel.style.height = (containerRect.height - newUpperHeight - 6) + "px";
            }
        }
    };

    document.onmouseup = function() {
        if (isDragging) {
            isDragging = false;
            document.body.style.cursor = 'default';
            dragbar.style.background = '#333';
            document.body.style.userSelect = 'auto';
        }
    };
}

// Contoh di fungsi navigasi kamu
function showArbitragePage() {
    const contentDiv = document.getElementById('main-content'); // Sesuaikan ID content kamu
    contentDiv.innerHTML = pages.arbitrage; // Memasukkan HTML arbitrage
    
    // LANGKAH KRUSIAL: Panggil resizer setelah HTML masuk ke layar
    setTimeout(() => {
        initResizer();
    }, 100); 
}
function renderScanner() {
    const tbody = document.getElementById('scanner-body');
    const loanInput = document.getElementById('loan-amount').value || 1000; 
    tbody.innerHTML = '';

    const coins = [
        { name: 'BTC', icon: 'btc' }, { name: 'ETH', icon: 'eth' },
        { name: 'BNB', icon: 'bnb' }, { name: 'SOL', icon: 'sol' },
        { name: 'XRP', icon: 'xrp' }, { name: 'ADA', icon: 'ada' },
        { name: 'AVAX', icon: 'avax' }, { name: 'DOT', icon: 'dot' },
        { name: 'MATIC', icon: 'matic' }, { name: 'LINK', icon: 'link' }
    ];

    coins.forEach((coin, index) => {
        let priceA = (Math.random() * 30000).toFixed(2);
        let gap = (Math.random() * 2.5 + 0.5).toFixed(2); 
        let priceB = (priceA * (1 + gap/100)).toFixed(2);
        
        let rawProfit = (loanInput * (gap / 100));
        let netProfit = (rawProfit - (loanInput * 0.0009)).toFixed(2);

        const row = `
            <tr style="border-bottom: 1px solid #222;">
                <td style="color: #666; vertical-align: middle;">${index + 1}</td>
                <td style="vertical-align: middle;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <img src="https://raw.githubusercontent.com/t4960/cryptocurrency-icons/master/128/color/${coin.icon}.png" 
                             onerror="this.src='https://via.placeholder.com/20?text=?'" 
                             style="width: 20px; height: 20px;">
                        <span style="font-weight: bold; color: #fff;">${coin.name}/USDT</span>
                    </div>
                </td>
                <td style="color: #00FF7F; vertical-align: middle;">$${priceA}</td>
                <td style="color: #FF4500; vertical-align: middle;">$${priceB}</td>
                <td style="vertical-align: middle;">
                    <span class="badge" style="background: rgba(0, 255, 127, 0.1); color: #00FF7F; border: 1px solid #00FF7F; padding: 4px 8px;">
                        +${gap}%
                    </span>
                </td>
                <td style="color: #FFD700; font-weight: bold; vertical-align: middle;">
                    $${netProfit} 
                    <small style="font-size: 9px; color: #888; display: block; font-weight: normal;">profit on $${loanInput}</small>
                </td>
                <td style="text-align: center; vertical-align: middle;">
                    <button class="btn-execute-list" onclick="window.selectTarget('${coin.name}', '${gap}')" 
                            style="padding: 6px 15px; font-size: 10px; background: #FFD700; color: #000; border: none; font-weight: bold; border-radius: 4px; cursor: pointer; text-transform: uppercase;">
                        EXECUTE
                    </button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function selectPair(name, gap) {
    // 1. Update Teks di Box Kanan
    document.getElementById('target-pair-name').innerText = name + "/USDT";
    document.getElementById('target-gap-val').innerText = gap + "%";
    
    // 2. Update juga di Report kanan (biar sinkron)
    document.getElementById('rep-pair').innerText = name + "/USDT";
    document.getElementById('rep-pct').innerText = gap + "%";

    // 3. Efek Visual: Beri highlight sejenak di box kanan agar user sadar sudah terpilih
    const targetBox = document.getElementById('selected-target-box');
    targetBox.style.boxShadow = "0 0 20px #00FF7F";
    setTimeout(() => { targetBox.style.boxShadow = "none"; }, 1000);

    // 4. Scroll otomatis sedikit ke atas agar user fokus ke tombol Eksekusi
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectTarget(name, gap) {
    console.log("Mengunci target:", name, gap); // Muncul di Console F12

    // Update Box Hijau (Selected Net Gap)
    const focusPair = document.getElementById('target-pair-display');
    const focusGap = document.getElementById('target-gap-display');
    
    if (focusPair) focusPair.innerText = name + " / USDT";
    if (focusGap) focusGap.innerText = gap + "%";

    // Update Report Kanan
    const repPair = document.getElementById('rep-pair');
    const repPct = document.getElementById('rep-pct');

    if (repPair) repPair.innerText = name + "/USDT";
    if (repPct) repPct.innerText = gap + "%";

    const focusBox = document.getElementById('selected-target-focus');
    if (focusBox) {
        focusBox.classList.add('flash-success');
        setTimeout(() => focusBox.classList.remove('flash-success'), 600);
    }

    // Mulai pergerakan angka (Live Update)
    startLiveUpdate();
}

function startLiveUpdate() {
    // Bersihkan interval lama jika ada agar tidak berat
    if (liveUpdateInterval) clearInterval(liveUpdateInterval);

    liveUpdateInterval = setInterval(() => {
        if (lockedTarget.name !== '') {
            // Simulasi pergerakan harga yang tipis (realistis)
            let change = (Math.random() * 0.06 - 0.03); 
            let newGap = (parseFloat(lockedTarget.gap) + change).toFixed(2);
            
            // Minimal gap jangan sampai nol (biar tetap logis)
            if (newGap < 0.1) newGap = 0.45;

            // Update ke Box Target (Sisi Kanan)
            const gapDisplay = document.getElementById('target-gap-display');
            if (gapDisplay) {
                gapDisplay.innerText = newGap + "%";
                
                // Beri efek warna sekejap: Hijau jika naik, Merah jika turun
                gapDisplay.style.color = change >= 0 ? "#00FF7F" : "#FF4500";
                setTimeout(() => { gapDisplay.style.color = "#00FF7F"; }, 500);
            }

            // Update juga ke Final Execution Report (Panel Kanan)
            const repPct = document.getElementById('rep-pct');
            if (repPct) repPct.innerText = newGap + "%";

            // Update variabel global agar fluktuasi berikutnya berlanjut dari angka terbaru
            lockedTarget.gap = newGap;

            // PENTING: Update semua kalkulasi profit di Report secara otomatis
            if (typeof updateAllCalculations === "function") {
                updateAllCalculations();
            }
        }
    }, 2000); // Bergerak setiap 2 detik
}


window.registerAs = function(role) {
    // Simpan role ke memori/session
    localStorage.setItem('userRole', role); 
    
    // Langsung arahkan ke profile
    showPage('profile');
    
    // Beri notifikasi
    alert("Pendaftaran sebagai " + role + " berhasil! Silakan lengkapi data diri Anda.");
};

// Simpan fungsi aslinya dulu
const originalLoadPage = loadPage;

window.loadPage = function(pageName) {
    // Jalankan fungsi aslinya (Ganti konten HTML)
    originalLoadPage(pageName);

    // Cek jika yang dibuka adalah halaman PROFILE
    if (pageName === 'profile') {
        console.log("Menyiapkan data profil...");
        
        // 1. Jalankan fungsi untuk mengisi data user (Nama, WA, dll)
        setTimeout(initProfileData, 100); 
        
        // 2. Cek Role User (Apakah dia Agen, Terapis, atau Affiliate?)
        setTimeout(adjustProfileByRole, 150);
    }
}

// Fungsi untuk mengisi data awal di profil
function initProfileData() {
    const role = localStorage.getItem('userRole') || 'USER'; // Ambil role dari memori
    
    const roleDisplay = document.getElementById('display-role');
    if (roleDisplay) {
        roleDisplay.innerText = role.toUpperCase();
    }
}

// Fungsi untuk menyesuaikan tampilan (Contoh: Sembunyikan Sertifikat jika bukan Terapis)
function adjustProfileByRole() {
    const role = localStorage.getItem('userRole');
    const certArea = document.getElementById('cert-upload-area');

    if (role !== 'Terapis' && role !== 'Pengajar') {
        if (certArea) certArea.style.display = 'none'; // Sembunyikan upload sertifikat untuk Affiliate
    } else {
        if (certArea) certArea.style.display = 'flex';
    }
}

window.setRoleAndGo = function(role) {
    // 1. Simpan Role ke LocalStorage agar tidak hilang saat refresh
    localStorage.setItem('userRole', role);
    
    // 2. Tampilkan notifikasi kecil
    console.log("Mendaftarkan sebagai: " + role);
    
    // 3. Panggil fungsi pindah halaman (sesuaikan dengan nama fungsi navigasimu)
    // Jika fungsinya bernama loadPage, gunakan ini:
    if (typeof loadPage === 'function') {
        loadPage('profile');
    } else {
        // Jika tidak ada fungsi loadPage, coba panggil showPage
        showPage('profile');
    }
};
        

function toggleFaq(id) {
    const answer = document.getElementById(`ans-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    
    if (answer.style.display === "none") {
        answer.style.display = "block";
        icon.innerText = "expand_less";
    } else {
        answer.style.display = "none";
        icon.innerText = "expand_more";
    }
}


function subscribeNews() {
    const emailInput = document.getElementById('news-email');
    const email = emailInput.value;

    if (!email || !email.includes('@')) {
        alert("Mohon masukkan alamat email yang valid.");
        return;
    }

    // Efek loading sederhana
    console.log("Mendaftarkan email:", email);
    
    // Tampilkan pesan sukses (bisa diganti dengan Toast jika sudah ada)
    const container = emailInput.parentElement;
    container.innerHTML = `
        <div style="width: 100%; color: #00FF7F; padding: 12px; font-weight: bold; display: flex; align-items: center; justify-content: center; gap: 8px;">
            <i class="material-icons">check_circle</i> SUCCESS! YOU ARE SUBSCRIBED.
        </div>
    `;
}

// toggle-partner
document.addEventListener('DOMContentLoaded', function() {
  const partnerToggle = document.getElementById('toggle-partner');

  if (partnerToggle) {
    partnerToggle.addEventListener('change', function() {
      if (this.checked) {
        console.log("Toggle aktif! Mengalihkan ke halaman pendaftaran...");
        // Jika kawan pakai file lokal, pastikan namanya lengkap: 'TherapistTrainer.html'
        window.location.href = 'TherapistTrainer'; 
      }
    });
  } else {
    console.error("ID toggle-partner tidak ditemukan kawan!");
  }
});