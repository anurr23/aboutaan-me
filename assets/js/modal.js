const portfolioData = {
    'pakoku': {
        title: 'Personality Application',
        image: 'images/portfolio/pakoku.jpg',
        description: '<p class="mb-4 text-gray-400">This application is a personnel application in a company to make it easier for all employees to see their personal data in company records.</p><p class="mb-2 text-gray-300 font-semibold">Features:</p><ul class="space-y-2 text-gray-400"><li><i class="ph-bold ph-check text-brand-500 mr-2"></i>View remaining annual leave & benefits.</li><li><i class="ph-bold ph-check text-brand-500 mr-2"></i>Leave requests and approvals.</li><li><i class="ph-bold ph-check text-brand-500 mr-2"></i>Travel and meal allowance claims.</li><li><i class="ph-bold ph-check text-brand-500 mr-2"></i>Work and leave schedules.</li><li><i class="ph-bold ph-check text-brand-500 mr-2"></i>Self-assessments and attendance monitoring.</li></ul>'
    },
    'pakopintar': {
        title: 'Employee Learning System',
        image: 'images/portfolio/pakopintar.jpg',
        description: '<p class="mb-4 text-gray-400">This is a web-based application used by the HRD program to provide learning materials about other departments to all employees.</p><p class="mb-2 text-gray-300 font-semibold">Features:</p><ul class="space-y-2 text-gray-400"><li><i class="ph-bold ph-check text-purple-500 mr-2"></i>Video learning material & assignments.</li><li><i class="ph-bold ph-check text-purple-500 mr-2"></i>Pretest and posttest questions.</li><li><i class="ph-bold ph-check text-purple-500 mr-2"></i>Trainer assessment system.</li><li><i class="ph-bold ph-check text-purple-500 mr-2"></i>Employee ranking and performance review.</li></ul>'
    },
    'lhp': {
        title: 'Production Daily Report',
        image: 'images/portfolio/lhp.jpg',
        description: '<p class="mb-4 text-gray-400">A web-based application installed on tablets for each machine to record production results in real-time.</p><p class="mb-2 text-gray-300 font-semibold">Features:</p><ul class="space-y-2 text-gray-400"><li><i class="ph-bold ph-check text-blue-500 mr-2"></i>Record OK, NG, and repair production results.</li><li><i class="ph-bold ph-check text-blue-500 mr-2"></i>History of machine repairs.</li><li><i class="ph-bold ph-check text-blue-500 mr-2"></i>Determine production targets based on cycle time.</li><li><i class="ph-bold ph-check text-blue-500 mr-2"></i>Operator performance tracking.</li></ul>'
    },
    'lhp-dash': {
        title: 'Production Achievement Dash',
        image: 'images/portfolio/lhp-dash.jpg',
        description: '<p class="mb-4 text-gray-400">A dashboard functioning to see production achievements from integrated data from the LHP project.</p><p class="mb-2 text-gray-300 font-semibold">Features:</p><ul class="space-y-2 text-gray-400"><li><i class="ph-bold ph-check text-brand-500 mr-2"></i>Achievement of production per hour/machine.</li><li><i class="ph-bold ph-check text-brand-500 mr-2"></i>Total downtime and machine performance.</li><li><i class="ph-bold ph-check text-brand-500 mr-2"></i>Andon mapping (Normal, Downtime, Stop).</li><li><i class="ph-bold ph-check text-brand-500 mr-2"></i>OK, NG, and Repair ratio analysis.</li></ul>'
    },
    'ecm': {
        title: 'Electric Corrective Maintenance',
        image: 'images/portfolio/ecm.jpg',
        description: '<p class="mb-4 text-gray-400">Maintenance department application to monitor machine problems and downtime on the production line in real time.</p><p class="mb-2 text-gray-300 font-semibold">Features:</p><ul class="space-y-2 text-gray-400"><li><i class="ph-bold ph-check text-purple-500 mr-2"></i>Real-time problem monitoring.</li><li><i class="ph-bold ph-check text-purple-500 mr-2"></i>View the problem log on each machine.</li><li><i class="ph-bold ph-check text-purple-500 mr-2"></i>Monitor maintenance team performance.</li></ul>'
    },
    'dash-prod': {
        title: 'Production Dashboard',
        image: 'images/portfolio/dash-prod.jpeg',
        description: '<p class="mb-4 text-gray-400">A high-level dashboard to oversee production achievements across all lines and departments, integrated with Oracle & SQL Server.</p><p class="mb-2 text-gray-300 font-semibold">Features:</p><ul class="space-y-2 text-gray-400"><li><i class="ph-bold ph-check text-blue-500 mr-2"></i>Production achievement graphs (yearly/monthly/daily/shift).</li><li><i class="ph-bold ph-check text-blue-500 mr-2"></i>Detailed line stop analysis.</li><li><i class="ph-bold ph-check text-blue-500 mr-2"></i>Employee absence/replacement details.</li><li><i class="ph-bold ph-check text-blue-500 mr-2"></i>Performance, Quality, and Availability metrics.</li></ul>'
    },
    'dash-mtc': {
        title: 'Maintenance Dashboard',
        image: 'images/portfolio/dash-mtc.jpg',
        description: '<p class="mb-4 text-gray-400">Displays detailed problem information and part monitoring for engine replacement and preventative maintenance.</p><p class="mb-2 text-gray-300 font-semibold">Features:</p><ul class="space-y-2 text-gray-400"><li><i class="ph-bold ph-check text-brand-500 mr-2"></i>Member attendance tracking.</li><li><i class="ph-bold ph-check text-brand-500 mr-2"></i>Engine issue frequency ratios.</li><li><i class="ph-bold ph-check text-brand-500 mr-2"></i>Total downtime metrics.</li><li><i class="ph-bold ph-check text-brand-500 mr-2"></i>Monitoring checksheet machines.</li></ul>'
    },
    'dash-qty': {
        title: 'Quality Monitoring Dashboard',
        image: 'images/portfolio/qty.jpg',
        description: '<p class="mb-4 text-gray-400">Facilitates the monitoring of claim data from both suppliers and customers to maintain high quality standards.</p><p class="mb-2 text-gray-300 font-semibold">Features:</p><ul class="space-y-2 text-gray-400"><li><i class="ph-bold ph-check text-purple-500 mr-2"></i>Monitoring claims from suppliers.</li><li><i class="ph-bold ph-check text-purple-500 mr-2"></i>Monitoring claims from customers.</li><li><i class="ph-bold ph-check text-purple-500 mr-2"></i>Historical claim data analysis.</li></ul>'
    },
    'hr': {
        title: 'Human Resource Dashboard',
        image: 'images/portfolio/hr.jpeg',
        description: '<p class="mb-4 text-gray-400">A comprehensive HR dashboard for viewing employee data (demographics, financials, planned vs actual staffing).</p><p class="mb-2 text-gray-300 font-semibold">Features:</p><ul class="space-y-2 text-gray-400"><li><i class="ph-bold ph-check text-blue-500 mr-2"></i>Age & gender ratio monitoring.</li><li><i class="ph-bold ph-check text-blue-500 mr-2"></i>Salary and overtime cost tracking.</li><li><i class="ph-bold ph-check text-blue-500 mr-2"></i>Overtime ratio per department.</li><li><i class="ph-bold ph-check text-blue-500 mr-2"></i>Medical treatment cost tracking.</li></ul>'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Insert Modal HTML into body
    const modalHTML = `
        <div id="project-modal" class="fixed inset-0 z-50 hidden opacity-0 transition-opacity duration-300">
            <!-- Backdrop -->
            <div id="modal-backdrop" class="absolute inset-0 bg-dark-900/80 backdrop-blur-xl"></div>
            
            <!-- Modal Container -->
            <div class="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                <div id="modal-content" class="bg-dark-800 border border-white/10 rounded-3xl overflow-hidden w-full max-w-5xl shadow-2xl transform scale-95 transition-transform duration-300 flex flex-col lg:flex-row max-h-[90vh]">
                    
                    <!-- Close Button -->
                    <button id="modal-close" class="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-brand-500 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm">
                        <i class="ph-bold ph-x text-lg"></i>
                    </button>

                    <!-- Left: Image -->
                    <div class="lg:w-1/2 relative bg-dark-900 min-h-[300px] lg:min-h-0">
                        <img id="modal-image" src="" alt="" class="absolute inset-0 w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent lg:hidden"></div>
                    </div>

                    <!-- Right: Details -->
                    <div class="lg:w-1/2 p-8 lg:p-12 overflow-y-auto custom-scrollbar">
                        <span class="text-brand-400 font-bold uppercase tracking-widest text-xs mb-3 block">Project Detail</span>
                        <h2 id="modal-title" class="text-3xl font-bold text-white mb-6"></h2>
                        <div id="modal-description" class="prose prose-invert max-w-none text-sm md:text-base"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('project-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');
    
    const openModal = (id) => {
        const data = portfolioData[id];
        if (!data) return;

        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-image').src = data.image;
        document.getElementById('modal-description').innerHTML = data.description;

        modal.classList.remove('hidden');
        // trigger reflow
        void modal.offsetWidth;
        
        modal.classList.remove('opacity-0');
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.add('opacity-0');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-95');
        
        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }, 300);
    };

    // Attach click events to portfolio cards
    const cards = document.querySelectorAll('.portfolio-card');
    const ids = ['pakoku', 'pakopintar', 'lhp', 'lhp-dash', 'ecm', 'dash-prod', 'dash-mtc', 'dash-qty', 'hr'];
    
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            openModal(ids[index]);
        });
    });

    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
});
