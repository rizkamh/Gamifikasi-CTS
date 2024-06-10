<?php

class Aktifitas extends CI_Model
{

    private $_tables = 'tblriwayatnilai';

    public function getAktifitas()
    {
        $this->db->distinct();
        $this->db->select('nim, nama, tipesoal, tipetugas, tanggal');
        $this->db->group_by('nim');
        $query = $this->db->get($this->_tables);
        return $query->result();
    }

    public function getCofidentKondisi($nim, $level = 'all')
    {
        $sql = 'SELECT rn.*, l.nama_level FROM tblriwayatnilai rn
                LEFT JOIN tblsoalpilgan sp ON sp.idsoalpil = rn.idsoal
                LEFT JOIN tblsoalesai se ON se.idsoal = rn.idsoal
                LEFT JOIN tbllevel l ON l.idlevel = COALESCE(sp.idlevel, se.idlevel)
                WHERE rn.nim = ?';

        $params = array($nim);

        if ($level != 'all') {
            $sql .= ' AND l.idlevel = ?';
            $params[] = $level;
        }

        $sql .= ' GROUP BY rn.idsoal ORDER BY rn.idsoal ASC';

        $query = $this->db->query($sql, $params);
        if ($query) {
            return $query->result_array();
        } else {
            log_message('error', 'Query failed: ' . $this->db->last_query());
            return [];
        }
    }


    public function getTotalQuestions($nim)
    {
        $this->db->from('tblriwayatnilai');
        $this->db->where('nim', $nim);
        return $this->db->count_all_results();
    }

    public function getTotalCorrectAnswers($nim)
    {
        $this->db->from('tblriwayatnilai');
        $this->db->where('nilai >', 1);
        $this->db->where('nim', $nim);
        return $this->db->count_all_results();
    }

    public function getTotalIncorrectAnswers($nim)
    {
        $this->db->select('idsoal');
        $this->db->from('tblriwayatnilai');
        $this->db->where('nilai', 0);
        $this->db->where('nim', $nim);
        $query = $this->db->get();
        
        return $query->num_rows();
    }

    public function getTotalTime($nim)
    {
        $this->db->select_sum('timer');
        $this->db->from('tblriwayatnilai');
        $this->db->where('nim', $nim);
        $result = $this->db->get()->row();
        return $result->timer;
    }

    public function getSoalKondisi($nim, $idsoal, $level = 'all')
    {
        $sql = 'SELECT rn.*, l.nama_level FROM tblriwayatnilai rn
                LEFT JOIN tblsoalpilgan sp ON sp.idsoalpil = rn.idsoal
                LEFT JOIN tblsoalesai se ON se.idsoal = rn.idsoal
                LEFT JOIN tbllevel l ON l.idlevel = COALESCE(sp.idlevel, se.idlevel)
                WHERE rn.nim = ? AND rn.idsoal = ?';
    
        $params = array($nim, $idsoal); // Include idsoal in the parameters array
    
        if ($level != 'all') {
            $sql .= ' AND l.idlevel = ?';
            $params[] = $level;
        }
    
        $sql .= ' GROUP BY rn.idnilai ORDER BY rn.idnilai ASC';
    
        $query = $this->db->query($sql, $params);
        if ($query) {
            return $query->result_array();
        } else {
            log_message('error', 'Query failed: ' . $this->db->last_query());
            return [];
        }
    }
    
}
